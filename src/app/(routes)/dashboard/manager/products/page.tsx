"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  reorderLevel: number;
  expirationDate: string;
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Smart Watch",
      category: "Electronics",
      price: 299.99,
      stock: 50,
      reorderLevel: 10,
      expirationDate: "2024-12-31",
    },
    {
      id: 2,
      name: "Smart Tv",
      category: "Electronics",
      price: 19.99,
      stock: 100,
      reorderLevel: 20,
      expirationDate: "2024-06-30",
    },
    {
      id: 3,
      name: "Walton Ac",
      category: "Electronics",
      price: 700.99,
      stock: 50,
      reorderLevel: 20,
      expirationDate: "2024-06-28",
    },

    {
      id: 4,
      name: "Mini Freez",
      category: "Electronics",
      price: 300.99,
      stock: 40,
      reorderLevel: 15,
      expirationDate: "2024-06-29",
    },
  ]);

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    category: "",
    price: 0,
    stock: 0,
    reorderLevel: 0,
    expirationDate: "",
  });

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.category) {
      toast.error("Please fill in all required fields");

      return;
    }

    const product: Product = {
      id: products.length + 1,
      ...(newProduct as Omit<Product, "id">),
    };

    setProducts([...products, product]);
    setIsAddDialogOpen(false);
    setNewProduct({
      name: "",
      category: "",
      price: 0,
      stock: 0,
      reorderLevel: 0,
      expirationDate: "",
    });

    toast.success("Product added successfully");
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));

    toast.success("Product deleted successfully");
  };

  return (
    <div className="w-full h-full mx-auto">
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Product Management
            </h1>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) =>
                        setNewProduct({ ...newProduct, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={newProduct.category}
                      onValueChange={(value) =>
                        setNewProduct({ ...newProduct, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Electronics">Electronics</SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Clothing">Clothing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          price: parseFloat(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      value={newProduct.stock}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          stock: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="reorderLevel">Reorder Level</Label>
                    <Input
                      id="reorderLevel"
                      type="number"
                      value={newProduct.reorderLevel}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          reorderLevel: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="expirationDate">Expiration Date</Label>
                    <Input
                      id="expirationDate"
                      type="date"
                      value={newProduct.expirationDate}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          expirationDate: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleAddProduct}>Add Product</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-white rounded-lg shadow">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Reorder Level</TableHead>
                  <TableHead>Expiration Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.reorderLevel}</TableCell>
                    <TableCell>{product.expirationDate}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;

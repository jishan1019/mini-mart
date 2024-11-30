import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: "up" | "down";
}

const StatCard = ({
  title,
  value,
  icon,
  trend,
  trendDirection,
}: StatCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-semibold mt-1">{value}</h3>
            {trend && (
              <p
                className={cn(
                  "text-sm mt-1",
                  trendDirection === "up" ? "text-green-600" : "text-red-600"
                )}
              >
                {trend}
              </p>
            )}
          </div>
          <div className="text-gray-400">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;

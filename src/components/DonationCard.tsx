import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DonationCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  color: string;
  icon: string;
}

const DonationCard = ({
  title,
  price,
  originalPrice,
  features,
  popular,
  color,
  icon,
}: DonationCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden hover:scale-105 transition-transform duration-300 ${popular ? "ring-2 ring-green-500 shadow-lg" : ""}`}
    >
      {popular && (
        <Badge className="absolute top-4 right-4 bg-green-500 text-white">
          <Icon name="Star" size={14} />
          Популярный
        </Badge>
      )}

      <CardHeader className={`${color} text-white text-center pb-8`}>
        <div className="mx-auto mb-4">
          <Icon name={icon as any} size={48} />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-white/80">
          <span className="flex items-center justify-center gap-2 mt-2">
            {originalPrice && (
              <span className="text-lg line-through opacity-60">
                {originalPrice}₽
              </span>
            )}
            <span className="text-3xl font-bold">{price}₽</span>
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Icon
                name="Check"
                size={16}
                className="text-green-500 flex-shrink-0"
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
          <Icon name="CreditCard" size={16} />
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;

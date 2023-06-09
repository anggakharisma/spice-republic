import { UserOrderItem } from "@/type";
import Image from "next/image";

type OrderCardProps = {
  orderItem: UserOrderItem
}

export default function OrderCard({ orderItem }: OrderCardProps) {
  return (
    <div className="m-auto w-full relative h-full">
      <div className="rounded-full m-auto hover:cursor-pointer relative">
        <Image
          src={`http://localhost:3232/${orderItem.food.image}` || `/images/food01.jpg`}
          alt="desc"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-40 max-h-full object-cover rounded-md hover:rounded-2xl transition-all"
        />
        <h3 className="text-black">{orderItem.food.name}</h3>
        <h3 className="text-black">Rp {orderItem.food.price}</h3>

        <div className="flex text-black w-full m-auto my-8 justify-center mt-4">
          <button className="bg-yellow-300 px-2 py-2">-</button>
          <input className="w-8 text-center mx-4 p-1 py-1 border-black" value={orderItem.amount} />
          <button className="bg-yellow-300 px-2 py-2">+</button>
        </div>
      </div>
    </div>
  );
}

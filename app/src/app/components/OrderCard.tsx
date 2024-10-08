import { idrCurrency, usdCurrency } from "@/config/currency";
import { UserOrderItem, ChangeQuantity } from "@/type";
import Image from "next/image";
import Button from "./ui/Button";
import { motion } from 'framer-motion'

type OrderCardProps = {
  orderItem: UserOrderItem,
  changeQuantity: ChangeQuantity,
  removeOrder: (hash: string) => void
}
export default function OrderCard({ orderItem, changeQuantity, removeOrder }: OrderCardProps) {
  return (
    <motion.div animate className="m-auto w-full relative h-full mt-4">
      <button type="button" className="border-red-800 border-2 z-50 absolute top-0 right-0 bg-red-600 p-1 px-2" onClick={() => removeOrder(orderItem.hash)}>x</button>
      <div className="rounded-full m-auto hover:cursor-pointer relative">
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${orderItem.food.image}` || `/images/food01.jpg`}
          alt="desc"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-40 mb-2 max-h-full object-cover rounded-md hover:rounded-2xl transition-all"
        />
        <h3 className="text-black">{orderItem.food.name}</h3>
        <h3 className="text-black">{usdCurrency.format(orderItem.food.price).replace(/(\.|,)00$/g, '')}</h3>

        <div className="flex text-black w-full m-auto my-0 justify-center mt-2">
          <Button onClick={() => changeQuantity("DECREASE", orderItem)}>-</Button>
          <input disabled className="w-8 text-center mx-2 p-1 py-1 border-gray-200 border-[1px]" value={orderItem.amount} />
          <Button onClick={() => changeQuantity("INCREASE", orderItem)}>+</Button>
        </div>
      </div>
    </motion.div>
  );
}

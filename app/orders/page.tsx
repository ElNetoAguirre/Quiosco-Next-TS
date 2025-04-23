import LatestOrderItem from "@/components/order/LatestOrderItem"
import Logo from "@/components/ui/Logo"
import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

async function getReadyOrders() {
  const orders = await prisma.order.findMany({
    take: 6,
    where: {
      orderReadyAt: {
        not: null
      }
    },
    orderBy: {
      orderReadyAt: "desc"
    },
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return orders
}

export default async function OrdersPage() {
  const orders = await getReadyOrders()

  return (
    <>
      <h1 className="text-center mt-20 text-6xl font-black">Ordenes Listas</h1>

      <Logo/>

      <form
        action={async () => {
          "use server"
          revalidatePath("/orders")
        }}
        className="flex justify-center mt-5"
      >
        <input
          type="submit"
          value="Actualizar Ordenes"
          className="bg-amber-400 hover:bg-amber-500 transition-colors w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer rounded-lg"
        />
      </form>

      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 max-w-5xl mx-auto mt-10">
          {orders.map(order => (
            <LatestOrderItem
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ) : <p className="text-center">No hay Ordenes Listas</p>}
    </>
  )
}

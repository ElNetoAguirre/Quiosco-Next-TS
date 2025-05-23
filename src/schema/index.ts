import { z } from "zod"

export const OrderSchema = z.object({
  name: z.string().min(1, "Tu Nombre es obligatorio"),
  total: z.number().min(1, "Hay Errores en la Orden"),
  order: z.array(z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    subtotal: z.number(),
  }))
})

export const OrderIdSchema = z.object({
  orderId: z.string()
      .transform((value) => parseInt(value))
      .refine(value => value > 0, {message: "Hay errores"})
})

export const SearchSchema = z.object({
  search: z.string()
      .trim()
      .min(1, {message: "La búsqueda no puede ir vacia"})
})

export const ProductSchema = z.object({
  name: z.string()
      .trim()
      .min(1, {message: "El Nombre del Producto no puede ir vacio"}),
  price: z.string()
      .trim()
      .transform((value) => parseFloat(value)) 
      .refine((value) => value > 0, {message: "El Precio no es válido"})
      .or(z.number().min(1, {message: "La Categoría es obligatoria"})),
  categoryId: z.string()
      .trim()
      .transform((value) => parseInt(value)) 
      .refine((value) => value > 0, {message: "La Categoría es obligatoria"})
      .or(z.number().min(1, {message: "La Categoría es obligatoria"})),
  image: z.string().min(1, {message: "La Imagen es obligatoria"})
})

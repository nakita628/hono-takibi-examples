import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getFoodBrandedBarcodePhp(
  args: InferRequestType<(typeof client.food.branded)['barcode.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.branded['barcode.php'].$get(args, options))
}

export async function getFoodBrandedNamePhp(
  args: InferRequestType<(typeof client.food.branded)['name.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.branded['name.php'].$get(args, options))
}

export async function getFoodBrandedSearchPhp(
  args: InferRequestType<(typeof client.food.branded)['search.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.branded['search.php'].$get(args, options))
}

export async function getFoodIngredientSearchPhp(
  args: InferRequestType<(typeof client.food.ingredient)['search.php']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.food.ingredient['search.php'].$get(args, options))
}

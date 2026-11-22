import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAirtravelCoordinates(
  args: InferRequestType<typeof client.airtravelCoordinates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelCoordinates.$post(args, options))
}

export async function patchAirtravelCoordinatesConfirmCarbonOffset(
  args: InferRequestType<typeof client.airtravelCoordinates.confirmCarbonOffset.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelCoordinates.confirmCarbonOffset.$patch(args, options))
}

export async function patchAirtravelCoordinatesConfirmPayment(
  args: InferRequestType<typeof client.airtravelCoordinates.confirmPayment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelCoordinates.confirmPayment.$patch(args, options))
}

export async function patchAirtravelCoordinatesConfirmPlanting(
  args: InferRequestType<typeof client.airtravelCoordinates.confirmPlanting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelCoordinates.confirmPlanting.$patch(args, options))
}

export async function patchAirtravelCoordinatesConfirmTransaction(
  args: InferRequestType<typeof client.airtravelCoordinates.confirmTransaction.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelCoordinates.confirmTransaction.$patch(args, options))
}

export async function postAirtravelMultileg(
  args: InferRequestType<typeof client.airtravelMultileg.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelMultileg.$post(args, options))
}

export async function patchAirtravelMultilegConfirmCarbonOffset(
  args: InferRequestType<typeof client.airtravelMultileg.confirmCarbonOffset.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelMultileg.confirmCarbonOffset.$patch(args, options))
}

export async function patchAirtravelMultilegConfirmPayment(
  args: InferRequestType<typeof client.airtravelMultileg.confirmPayment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelMultileg.confirmPayment.$patch(args, options))
}

export async function patchAirtravelMultilegConfirmPlanting(
  args: InferRequestType<typeof client.airtravelMultileg.confirmPlanting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelMultileg.confirmPlanting.$patch(args, options))
}

export async function patchAirtravelMultilegConfirmTransaction(
  args: InferRequestType<typeof client.airtravelMultileg.confirmTransaction.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.airtravelMultileg.confirmTransaction.$patch(args, options))
}

export async function postEcommerceDelivery(
  args: InferRequestType<typeof client.ecommerceDelivery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerceDelivery.$post(args, options))
}

export async function patchEcommerceDeliveryConfirmCarbonOffset(
  args: InferRequestType<typeof client.ecommerceDelivery.confirmCarbonOffset.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerceDelivery.confirmCarbonOffset.$patch(args, options))
}

export async function patchEcommerceDeliveryConfirmPayment(
  args: InferRequestType<typeof client.ecommerceDelivery.confirmPayment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerceDelivery.confirmPayment.$patch(args, options))
}

export async function patchEcommerceDeliveryConfirmPlanting(
  args: InferRequestType<typeof client.ecommerceDelivery.confirmPlanting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerceDelivery.confirmPlanting.$patch(args, options))
}

export async function patchEcommerceDeliveryConfirmTransaction(
  args: InferRequestType<typeof client.ecommerceDelivery.confirmTransaction.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ecommerceDelivery.confirmTransaction.$patch(args, options))
}

export async function postRequestApiKey(
  args: InferRequestType<typeof client.requestApiKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.requestApiKey.$post(args, options))
}

export async function postRoadDistance(
  args: InferRequestType<typeof client.roadDistance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roadDistance.$post(args, options))
}

export async function patchRoadDistanceConfirmCarbonOffset(
  args: InferRequestType<typeof client.roadDistance.confirmCarbonOffset.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roadDistance.confirmCarbonOffset.$patch(args, options))
}

export async function patchRoadDistanceConfirmPayment(
  args: InferRequestType<typeof client.roadDistance.confirmPayment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roadDistance.confirmPayment.$patch(args, options))
}

export async function patchRoadDistanceConfirmPlanting(
  args: InferRequestType<typeof client.roadDistance.confirmPlanting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roadDistance.confirmPlanting.$patch(args, options))
}

export async function patchRoadDistanceConfirmTransaction(
  args: InferRequestType<typeof client.roadDistance.confirmTransaction.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roadDistance.confirmTransaction.$patch(args, options))
}

export async function postUrbanDelivery(
  args: InferRequestType<typeof client.urbanDelivery.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urbanDelivery.$post(args, options))
}

export async function patchUrbanDeliveryConfirmCarbonOffset(
  args: InferRequestType<typeof client.urbanDelivery.confirmCarbonOffset.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urbanDelivery.confirmCarbonOffset.$patch(args, options))
}

export async function patchUrbanDeliveryConfirmPayment(
  args: InferRequestType<typeof client.urbanDelivery.confirmPayment.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urbanDelivery.confirmPayment.$patch(args, options))
}

export async function patchUrbanDeliveryConfirmPlanting(
  args: InferRequestType<typeof client.urbanDelivery.confirmPlanting.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urbanDelivery.confirmPlanting.$patch(args, options))
}

export async function patchUrbanDeliveryConfirmTransaction(
  args: InferRequestType<typeof client.urbanDelivery.confirmTransaction.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.urbanDelivery.confirmTransaction.$patch(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postShipmentCreateFromShippingQuote(
  args: InferRequestType<typeof client.shipment.create_from_shipping_quote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipment.create_from_shipping_quote.$post(args, options))
}

export async function getShipmentShipmentId(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipment[':shipmentId'].$get(args, options))
}

export async function postShipmentShipmentIdCancel(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipment[':shipmentId'].cancel.$post(args, options))
}

export async function getShipmentShipmentIdDownloadLabelFile(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipment[':shipmentId'].download_label_file.$get(args, options))
}

export async function postShippingQuote(
  args: InferRequestType<typeof client.shipping_quote.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipping_quote.$post(args, options))
}

export async function getShippingQuoteShippingQuoteId(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shipping_quote[':shippingQuoteId'].$get(args, options))
}

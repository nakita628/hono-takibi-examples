import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getMbusApi(options?: ClientRequestOptions) {
  return await parseResponse(client.mbus.api.$get(undefined, options))
}

export async function postMbusGetDeviceBaudrateAddress(
  args: InferRequestType<(typeof client.mbus.get)[':device'][':baudrate'][':address']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mbus.get[':device'][':baudrate'][':address'].$post(args, options),
  )
}

export async function postMbusGetMultiDeviceBaudrateAddressMaxframes(
  args: InferRequestType<
    (typeof client.mbus.getMulti)[':device'][':baudrate'][':address'][':maxframes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.mbus.getMulti[':device'][':baudrate'][':address'][':maxframes'].$post(args, options),
  )
}

export async function getMbusHat(options?: ClientRequestOptions) {
  return await parseResponse(client.mbus.hat.$get(undefined, options))
}

export async function postMbusHatOff(options?: ClientRequestOptions) {
  return await parseResponse(client.mbus.hat.off.$post(undefined, options))
}

export async function postMbusHatOn(options?: ClientRequestOptions) {
  return await parseResponse(client.mbus.hat.on.$post(undefined, options))
}

export async function postMbusScanDeviceBaudrate(
  args: InferRequestType<(typeof client.mbus.scan)[':device'][':baudrate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mbus.scan[':device'][':baudrate'].$post(args, options))
}

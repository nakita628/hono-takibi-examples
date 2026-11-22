import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIdealProfileAuthLink(
  args: InferRequestType<(typeof client.ideal.profile)['auth-link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ideal.profile['auth-link'].$post(args, options))
}

export async function postIdealProfileAuthenticate(
  args: InferRequestType<typeof client.ideal.profile.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ideal.profile.authenticate.$post(args, options))
}

export async function postIdealProfileRegister(
  args: InferRequestType<typeof client.ideal.profile.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ideal.profile.register.$post(args, options))
}

export async function postPaymentsCancel(
  args: InferRequestType<typeof client.payments.cancel.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.cancel.$post(args, options))
}

export async function postPaymentsConfirm(
  args: InferRequestType<typeof client.payments.confirm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.confirm.$post(args, options))
}

export async function postPaymentsDetails(
  args: InferRequestType<typeof client.payments.details.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.payments.details.$post(args, options))
}

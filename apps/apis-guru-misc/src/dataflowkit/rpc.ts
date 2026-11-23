import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postConvertUrlPdf(
  args: InferRequestType<typeof client.convert.url.pdf.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.url.pdf.$post(args, options))
}

export async function postConvertUrlScreenshot(
  args: InferRequestType<typeof client.convert.url.screenshot.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.convert.url.screenshot.$post(args, options))
}

export async function postFetch(
  args: InferRequestType<typeof client.fetch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fetch.$post(args, options))
}

export async function postParse(
  args: InferRequestType<typeof client.parse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parse.$post(args, options))
}

export async function postSerp(
  args: InferRequestType<typeof client.serp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.serp.$post(args, options))
}

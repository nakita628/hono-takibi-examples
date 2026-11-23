import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postChromeHtml(
  args: InferRequestType<typeof client.chrome.html.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chrome.html.$post(args, options))
}

export async function getChromeUrl(
  args: InferRequestType<typeof client.chrome.url.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chrome.url.$get(args, options))
}

export async function postChromeUrl(
  args: InferRequestType<typeof client.chrome.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chrome.url.$post(args, options))
}

export async function postLibreofficeConvert(
  args: InferRequestType<typeof client.libreoffice.convert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.libreoffice.convert.$post(args, options))
}

export async function postMerge(
  args: InferRequestType<typeof client.merge.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.merge.$post(args, options))
}

export async function postWkhtmltopdfHtml(
  args: InferRequestType<typeof client.wkhtmltopdf.html.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wkhtmltopdf.html.$post(args, options))
}

export async function getWkhtmltopdfUrl(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wkhtmltopdf.url.$get(args, options))
}

export async function postWkhtmltopdfUrl(
  args: InferRequestType<typeof client.wkhtmltopdf.url.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wkhtmltopdf.url.$post(args, options))
}

export async function getZebra(
  args: InferRequestType<typeof client.zebra.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zebra.$get(args, options))
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiPdf(options?: ClientRequestOptions) {
  return await parseResponse(client.api.pdf.$get(undefined, options))
}

export async function postApiPdfPdfconcat(
  args: InferRequestType<typeof client.api.pdf.pdfconcat.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.pdfconcat.$post(args, options))
}

export async function postApiPdfPdftoimage(
  args: InferRequestType<typeof client.api.pdf.pdftoimage.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.pdftoimage.$post(args, options))
}

export async function postApiPdfPdfwritestring(
  args: InferRequestType<typeof client.api.pdf.pdfwritestring.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.pdfwritestring.$post(args, options))
}

export async function postApiPdfWkhtmltopdf(
  args: InferRequestType<typeof client.api.pdf.wkhtmltopdf.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.wkhtmltopdf.$post(args, options))
}

export async function postApiPdfXslfo(
  args: InferRequestType<typeof client.api.pdf.xslfo.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.xslfo.$post(args, options))
}

export async function postApiPdfXslfowithtransform(
  args: InferRequestType<typeof client.api.pdf.xslfowithtransform.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.pdf.xslfowithtransform.$post(args, options))
}

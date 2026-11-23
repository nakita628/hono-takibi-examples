import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCountry(
  args: InferRequestType<typeof client.country.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.country.$get(args, options))
}

export async function getCountryAll(
  args: InferRequestType<typeof client.country.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.country.all.$get(args, options))
}

export async function getCountryCode(
  args: InferRequestType<typeof client.country.code.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.country.code.$get(args, options))
}

export async function getHelpCountries(
  args: InferRequestType<typeof client.help.countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.help.countries.$get(args, options))
}

export async function getReportCountryAll(
  args: InferRequestType<typeof client.report.country.all.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.country.all.$get(args, options))
}

export async function getReportCountryCode(
  args: InferRequestType<typeof client.report.country.code.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.country.code.$get(args, options))
}

export async function getReportCountryName(
  args: InferRequestType<typeof client.report.country.name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.country.name.$get(args, options))
}

export async function getReportTotals(
  args: InferRequestType<typeof client.report.totals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.totals.$get(args, options))
}

export async function getTotals(
  args: InferRequestType<typeof client.totals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.totals.$get(args, options))
}

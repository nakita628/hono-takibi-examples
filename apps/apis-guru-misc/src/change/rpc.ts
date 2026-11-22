import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1DonationsCarbonCalculate(
  args: InferRequestType<typeof client.api.v1.donations.carbon_calculate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.carbon_calculate.$get(args, options))
}

export async function getApiV1DonationsCarbonStats(
  args: InferRequestType<typeof client.api.v1.donations.carbon_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.carbon_stats.$get(args, options))
}

export async function postApiV1DonationsCreate(
  args: InferRequestType<typeof client.api.v1.donations.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.create.$post(args, options))
}

export async function getApiV1DonationsCryptoCalculate(
  args: InferRequestType<typeof client.api.v1.donations.crypto_calculate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.crypto_calculate.$get(args, options))
}

export async function getApiV1DonationsIndex(
  args: InferRequestType<typeof client.api.v1.donations.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.index.$get(args, options))
}

export async function getApiV1DonationsShow(
  args: InferRequestType<typeof client.api.v1.donations.show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.donations.show.$get(args, options))
}

export async function getApiV1NonprofitsList(
  args: InferRequestType<typeof client.api.v1.nonprofits.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nonprofits.list.$get(args, options))
}

export async function getApiV1NonprofitsShow(
  args: InferRequestType<typeof client.api.v1.nonprofits.show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nonprofits.show.$get(args, options))
}

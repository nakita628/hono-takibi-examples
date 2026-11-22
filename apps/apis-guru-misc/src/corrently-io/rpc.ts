import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAlternativeEaseeLastSessions(
  args: InferRequestType<typeof client.alternative.easee.lastSessions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.alternative.easee.lastSessions.$get(args, options))
}

export async function getAlternativeOcppLastSessions(options?: ClientRequestOptions) {
  return await parseResponse(client.alternative.ocpp.lastSessions.$get(undefined, options))
}

export async function getAlternativeOpenmeterActivities(options?: ClientRequestOptions) {
  return await parseResponse(client.alternative.openmeter.activities.$get(undefined, options))
}

export async function getAlternativeOpenmeterMeters(options?: ClientRequestOptions) {
  return await parseResponse(client.alternative.openmeter.meters.$get(undefined, options))
}

export async function getAlternativeOpenmeterReadings(options?: ClientRequestOptions) {
  return await parseResponse(client.alternative.openmeter.readings.$get(undefined, options))
}

export async function getGsiBestHour(
  args: InferRequestType<typeof client.gsi.bestHour.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsi.bestHour.$get(args, options))
}

export async function getGsiDispatch(
  args: InferRequestType<typeof client.gsi.dispatch.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsi.dispatch.$get(args, options))
}

export async function getGsiMarketdata(
  args: InferRequestType<typeof client.gsi.marketdata.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsi.marketdata.$get(args, options))
}

export async function getGsiPrediction(
  args: InferRequestType<typeof client.gsi.prediction.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.gsi.prediction.$get(args, options))
}

export async function getMeteringReading(
  args: InferRequestType<typeof client.metering.reading.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metering.reading.$get(args, options))
}

export async function postMeteringReading(
  args: InferRequestType<typeof client.metering.reading.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metering.reading.$post(args, options))
}

export async function postQuittungCommit(
  args: InferRequestType<typeof client.quittung.commit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.commit.$post(args, options))
}

export async function postQuittungCreate(
  args: InferRequestType<typeof client.quittung.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.create.$post(args, options))
}

export async function postQuittungPrepare(
  args: InferRequestType<typeof client.quittung.prepare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.prepare.$post(args, options))
}

export async function postQuittungTse(
  args: InferRequestType<typeof client.quittung.tse.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.tse.$post(args, options))
}

export async function postQuittungTsedata(
  args: InferRequestType<typeof client.quittung.tsedata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.tsedata.$post(args, options))
}

export async function postQuittungTsesignature(
  args: InferRequestType<typeof client.quittung.tsesignature.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.tsesignature.$post(args, options))
}

export async function getQuittungZugferd(
  args: InferRequestType<typeof client.quittung.zugferd.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quittung.zugferd.$get(args, options))
}

export async function getStromkontoBalances(
  args: InferRequestType<typeof client.stromkonto.balances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stromkonto.balances.$get(args, options))
}

export async function getStromkontoChoices(
  args: InferRequestType<typeof client.stromkonto.choices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stromkonto.choices.$get(args, options))
}

export async function postStromkontoLogin(
  args: InferRequestType<typeof client.stromkonto.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stromkonto.login.$post(args, options))
}

export async function postStromkontoPrepareTransaction(
  args: InferRequestType<typeof client.stromkonto.prepareTransaction.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stromkonto.prepareTransaction.$post(args, options))
}

export async function postStromkontoRegister(
  args: InferRequestType<typeof client.stromkonto.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stromkonto.register.$post(args, options))
}

export async function getTariffComponents(
  args: InferRequestType<typeof client.tariff.components.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tariff.components.$get(args, options))
}

export async function getTariffSlph0(
  args: InferRequestType<typeof client.tariff.slph0.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tariff.slph0.$get(args, options))
}

export async function getWimStatus(
  args: InferRequestType<typeof client.wim.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.wim.status.$get(args, options))
}

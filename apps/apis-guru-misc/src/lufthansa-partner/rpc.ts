import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBaggageBaggagetripandcontactSearchID(
  args: InferRequestType<(typeof client.baggage.baggagetripandcontact)[':searchID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.baggage.baggagetripandcontact[':searchID'].$get(args, options))
}

export async function getOffersFaresAllfares(
  args: InferRequestType<typeof client.offers.fares.allfares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.allfares.$get(args, options))
}

export async function getOffersFaresBestfares(
  args: InferRequestType<typeof client.offers.fares.bestfares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.bestfares.$get(args, options))
}

export async function getOffersFaresDeeplink(
  args: InferRequestType<typeof client.offers.fares.deeplink.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.deeplink.$get(args, options))
}

export async function getOffersFaresDeeplinkFfp(
  args: InferRequestType<typeof client.offers.fares.deeplink.ffp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.deeplink.ffp.$get(args, options))
}

export async function getOffersFaresDeeplinkItco(
  args: InferRequestType<typeof client.offers.fares.deeplink.itco.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.deeplink.itco.$get(args, options))
}

export async function getOffersFaresFares(
  args: InferRequestType<typeof client.offers.fares.fares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.fares.$get(args, options))
}

export async function getOffersFaresLowestfares(
  args: InferRequestType<typeof client.offers.fares.lowestfares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.lowestfares.$get(args, options))
}

export async function getOffersFaresSubscriptions(
  args: InferRequestType<typeof client.offers.fares.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.fares.subscriptions.$get(args, options))
}

export async function getOffersOndRouteOriginDestination(
  args: InferRequestType<(typeof client.offers.ond.route)[':origin'][':destination']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.ond.route[':origin'][':destination'].$get(args, options))
}

export async function getOffersOndStatus(
  args: InferRequestType<typeof client.offers.ond.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.ond.status.$get(args, options))
}

export async function getOffersOndTop(
  args: InferRequestType<typeof client.offers.ond.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.offers.ond.top.$get(args, options))
}

export async function getOrdersOrdersOrderIDName(
  args: InferRequestType<(typeof client.orders.orders)[':orderID'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.orders[':orderID'][':name'].$get(args, options))
}

export async function putPreflightAutocheckinTicketnumber(
  args: InferRequestType<(typeof client.preflight.autocheckin)[':ticketnumber']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preflight.autocheckin[':ticketnumber'].$put(args, options))
}

export async function getPromotionsPriceoffersFlightsOndOriginDestination(
  args: InferRequestType<
    (typeof client.promotions.priceoffers.flights.ond)[':origin'][':destination']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.promotions.priceoffers.flights.ond[':origin'][':destination'].$get(args, options),
  )
}

export async function getReferencesSeatdetailsAircraftCodeCabinCode(
  args: InferRequestType<
    (typeof client.references.seatdetails)[':aircraftCode'][':cabinCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.references.seatdetails[':aircraftCode'][':cabinCode'].$get(args, options),
  )
}

import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getAccounts(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$get(args, options))
}

export async function putAccounts(
  args: InferRequestType<typeof client.accounts.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$put(args, options))
}

export async function postAccounts(
  args: InferRequestType<typeof client.accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.$post(args, options))
}

export async function postAccountsPassword(
  args: InferRequestType<typeof client.accounts.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.password.$post(args, options))
}

export async function getAccountsPaymentMethods(
  args: InferRequestType<typeof client.accounts.payment_methods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.payment_methods.$get(args, options))
}

export async function postAccountsSettings(
  args: InferRequestType<typeof client.accounts.settings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.settings.$post(args, options))
}

export async function postAccountsSignIn(
  args: InferRequestType<typeof client.accounts.sign_in.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.sign_in.$post(args, options))
}

export async function putAccountsUpdatePassword(
  args: InferRequestType<typeof client.accounts.update_password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.update_password.$put(args, options))
}

export async function postAddressesPlacesAutocomplete(
  args: InferRequestType<typeof client.addresses.places_autocomplete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.places_autocomplete.$post(args, options))
}

export async function postAddressesPlacesDetails(
  args: InferRequestType<typeof client.addresses.places_details.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.places_details.$post(args, options))
}

export async function getCatchementAreas(
  args: InferRequestType<typeof client.catchement_areas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catchement_areas.$get(args, options))
}

export async function getCatchementAreasId(
  args: InferRequestType<(typeof client.catchement_areas)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.catchement_areas[':id'].$get(args, options))
}

export async function getCreditCards(
  args: InferRequestType<typeof client.credit_cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_cards.$get(args, options))
}

export async function getCreditCardsId(
  args: InferRequestType<(typeof client.credit_cards)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.credit_cards[':id'].$get(args, options))
}

export async function getProducts(
  args: InferRequestType<typeof client.products.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.$get(args, options))
}

export async function getProductsId(
  args: InferRequestType<(typeof client.products)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products[':id'].$get(args, options))
}

export async function getPromotionalCodes(
  args: InferRequestType<typeof client.promotional_codes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_codes.$get(args, options))
}

export async function postPromotionalCodes(
  args: InferRequestType<typeof client.promotional_codes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotional_codes.$post(args, options))
}

export async function getRidesId(
  args: InferRequestType<(typeof client.rides)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rides[':id'].$get(args, options))
}

export async function getRidesIdCancel(
  args: InferRequestType<(typeof client.rides)[':id']['cancel']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rides[':id'].cancel.$get(args, options))
}

export async function getRidesIdCancelFees(
  args: InferRequestType<(typeof client.rides)[':id']['cancel_fees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rides[':id'].cancel_fees.$get(args, options))
}

export async function getRidesIdEstimate(
  args: InferRequestType<(typeof client.rides)[':id']['estimate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rides[':id'].estimate.$get(args, options))
}

export async function postRidesIdReserve(
  args: InferRequestType<(typeof client.rides)[':id']['reserve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rides[':id'].reserve.$post(args, options))
}

export async function getRidesPagePagePerPagePerPage(
  args: InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rides?page={page}&per_page={per_page}'].$get(args, options))
}

export async function postRidesPagePagePerPagePerPage(
  args: InferRequestType<(typeof client)['rides?page={page}&per_page={per_page}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['rides?page={page}&per_page={per_page}'].$post(args, options))
}

export async function getVersion(
  args: InferRequestType<(typeof client)[':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':version'].$get(args, options))
}

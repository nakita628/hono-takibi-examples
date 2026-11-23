import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAddresses(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$get(args, options))
}

export async function getAutocompleteAddresses(
  args: InferRequestType<typeof client.autocomplete.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocomplete.addresses.$get(args, options))
}

export async function getAutocompleteAddressesAddressGbr(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['gbr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocomplete.addresses[':address'].gbr.$get(args, options))
}

export async function getAutocompleteAddressesAddressUsa(
  args: InferRequestType<(typeof client.autocomplete.addresses)[':address']['usa']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.autocomplete.addresses[':address'].usa.$get(args, options))
}

export async function postCleanseAddresses(
  args: InferRequestType<typeof client.cleanse.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cleanse.addresses.$post(args, options))
}

export async function getEmails(
  args: InferRequestType<typeof client.emails.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.emails.$get(args, options))
}

export async function getKeysKey(
  args: InferRequestType<(typeof client.keys)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].$get(args, options))
}

export async function getKeysKeyConfigs(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].configs.$get(args, options))
}

export async function postKeysKeyConfigs(
  args: InferRequestType<(typeof client.keys)[':key']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].configs.$post(args, options))
}

export async function getKeysKeyConfigsConfig(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].configs[':config'].$get(args, options))
}

export async function postKeysKeyConfigsConfig(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].configs[':config'].$post(args, options))
}

export async function deleteKeysKeyConfigsConfig(
  args: InferRequestType<(typeof client.keys)[':key']['configs'][':config']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].configs[':config'].$delete(args, options))
}

export async function getKeysKeyDetails(
  args: InferRequestType<(typeof client.keys)[':key']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].details.$get(args, options))
}

export async function getKeysKeyLicensees(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].licensees.$get(args, options))
}

export async function postKeysKeyLicensees(
  args: InferRequestType<(typeof client.keys)[':key']['licensees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].licensees.$post(args, options))
}

export async function getKeysKeyLicenseesLicensee(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].licensees[':licensee'].$get(args, options))
}

export async function putKeysKeyLicenseesLicensee(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].licensees[':licensee'].$put(args, options))
}

export async function deleteKeysKeyLicenseesLicensee(
  args: InferRequestType<(typeof client.keys)[':key']['licensees'][':licensee']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].licensees[':licensee'].$delete(args, options))
}

export async function getKeysKeyLookups(
  args: InferRequestType<(typeof client.keys)[':key']['lookups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].lookups.$get(args, options))
}

export async function getKeysKeyUsage(
  args: InferRequestType<(typeof client.keys)[':key']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key'].usage.$get(args, options))
}

export async function getPhoneNumbers(
  args: InferRequestType<typeof client.phone_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.phone_numbers.$get(args, options))
}

export async function getPlaces(
  args: InferRequestType<typeof client.places.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places.$get(args, options))
}

export async function getPlacesPlace(
  args: InferRequestType<(typeof client.places)['${place}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.places['${place}'].$get(args, options))
}

export async function getPostcodesPostcode(
  args: InferRequestType<(typeof client.postcodes)[':postcode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postcodes[':postcode'].$get(args, options))
}

export async function getUdprnUdprn(
  args: InferRequestType<(typeof client.udprn)[':udprn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.udprn[':udprn'].$get(args, options))
}

export async function getUmprnUmprn(
  args: InferRequestType<(typeof client.umprn)[':umprn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.umprn[':umprn'].$get(args, options))
}

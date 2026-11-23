import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiCard(
  args: InferRequestType<typeof client.api.Card.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Card.$get(args, options))
}

export async function getApiCardTypes(
  args: InferRequestType<typeof client.api.Card.Types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Card.Types.$get(args, options))
}

export async function getApiFinanceCountries(
  args: InferRequestType<typeof client.api.Finance.Countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Finance.Countries.$get(args, options))
}

export async function getApiFinanceCryptoAddress(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Finance.CryptoAddress.$get(args, options))
}

export async function getApiFinanceCryptoAddressTypes(
  args: InferRequestType<typeof client.api.Finance.CryptoAddress.Types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Finance.CryptoAddress.Types.$get(args, options))
}

export async function getApiFinanceIbanCountryCode(
  args: InferRequestType<(typeof client.api.Finance.Iban)[':countryCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Finance.Iban[':countryCode'].$get(args, options))
}

export async function postApiFinanceVatValidator(
  args: InferRequestType<typeof client.api.Finance.Vat.Validator.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Finance.Vat.Validator.$post(args, options))
}

export async function getApiMiscCultures(
  args: InferRequestType<typeof client.api.Misc.Cultures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Misc.Cultures.$get(args, options))
}

export async function getApiMiscRandomAddress(
  args: InferRequestType<(typeof client.api.Misc)['Random-Address']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Misc['Random-Address'].$get(args, options))
}

export async function getApiName(
  args: InferRequestType<typeof client.api.Name.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Name.$get(args, options))
}

export async function postApiNameBrandName(
  args: InferRequestType<typeof client.api.Name.BrandName.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Name.BrandName.$post(args, options))
}

export async function postApiNameBusinessName(
  args: InferRequestType<typeof client.api.Name.BusinessName.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Name.BusinessName.$post(args, options))
}

export async function getApiNameCultures(
  args: InferRequestType<typeof client.api.Name.Cultures.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Name.Cultures.$get(args, options))
}

export async function getApiNameSuggestions(
  args: InferRequestType<typeof client.api.Name.Suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Name.Suggestions.$get(args, options))
}

export async function getApiPhoneCountries(
  args: InferRequestType<typeof client.api.Phone.Countries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Phone.Countries.$get(args, options))
}

export async function getApiPhoneGenerate(
  args: InferRequestType<typeof client.api.Phone.Generate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Phone.Generate.$get(args, options))
}

export async function getApiPhoneIMEI(
  args: InferRequestType<typeof client.api.Phone.IMEI.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Phone.IMEI.$get(args, options))
}

export async function getApiPhoneValidate(
  args: InferRequestType<typeof client.api.Phone.Validate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Phone.Validate.$get(args, options))
}

export async function getApiSocialNumber(
  args: InferRequestType<typeof client.api.SocialNumber.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SocialNumber.$get(args, options))
}

export async function postApiSocialNumber(
  args: InferRequestType<typeof client.api.SocialNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.SocialNumber.$post(args, options))
}

export async function postApiTextHumanize(
  args: InferRequestType<typeof client.api.Text.Humanize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Text.Humanize.$post(args, options))
}

export async function getApiTextLoremIpsum(
  args: InferRequestType<typeof client.api.Text.LoremIpsum.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Text.LoremIpsum.$get(args, options))
}

export async function getApiTextPassword(
  args: InferRequestType<typeof client.api.Text.Password.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Text.Password.$get(args, options))
}

export async function postApiTextReview(
  args: InferRequestType<typeof client.api.Text.Review.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Text.Review.$post(args, options))
}

export async function postApiTextTransform(
  args: InferRequestType<typeof client.api.Text.Transform.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.Text.Transform.$post(args, options))
}

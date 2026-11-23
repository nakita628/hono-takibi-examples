import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSettingsCurrencies202609CentralFxRatesAddCurrency(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['central-fx-rates']['add-currency']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['central-fx-rates']['add-currency'].$post(args, options),
  )
}

export async function getSettingsCurrencies202609CentralFxRatesInformation(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['central-fx-rates'].information.$get(undefined, options),
  )
}

export async function getSettingsCurrencies202609CentralFxRatesUnsupportedCurrencies(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['central-fx-rates']['unsupported-currencies'].$get(
      undefined,
      options,
    ),
  )
}

export async function getSettingsCurrencies202609Codes(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.currencies['2026-09'].codes.$get(undefined, options))
}

export async function getSettingsCurrencies202609CompanyCurrency(options?: ClientRequestOptions) {
  return await parseResponse(
    client.settings.currencies['2026-09']['company-currency'].$get(undefined, options),
  )
}

export async function putSettingsCurrencies202609CompanyCurrency(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['company-currency']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['company-currency'].$put(args, options),
  )
}

export async function getSettingsCurrencies202609ExchangeRates(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].$get(args, options),
  )
}

export async function postSettingsCurrencies202609ExchangeRates(
  args: InferRequestType<(typeof client.settings.currencies)['2026-09']['exchange-rates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].$post(args, options),
  )
}

export async function postSettingsCurrencies202609ExchangeRatesBatchCreate(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].batch.create.$post(args, options),
  )
}

export async function postSettingsCurrencies202609ExchangeRatesBatchRead(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].batch.read.$post(args, options),
  )
}

export async function postSettingsCurrencies202609ExchangeRatesBatchUpdate(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates']['batch']['update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].batch.update.$post(args, options),
  )
}

export async function getSettingsCurrencies202609ExchangeRatesCurrent(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'].current.$get(undefined, options),
  )
}

export async function postSettingsCurrencies202609ExchangeRatesUpdateVisibility(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates']['update-visibility']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates']['update-visibility'].$post(
      args,
      options,
    ),
  )
}

export async function getSettingsCurrencies202609ExchangeRatesExchangeRateId(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$get(args, options),
  )
}

export async function patchSettingsCurrencies202609ExchangeRatesExchangeRateId(
  args: InferRequestType<
    (typeof client.settings.currencies)['2026-09']['exchange-rates'][':exchangeRateId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.currencies['2026-09']['exchange-rates'][':exchangeRateId'].$patch(
      args,
      options,
    ),
  )
}

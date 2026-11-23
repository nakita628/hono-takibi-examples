import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1EventsCorporateActionsRoute,
  getV1beta1FixedIncomeLatestPricesRoute,
  getV1beta1FixedIncomeLatestQuotesRoute,
  getV1beta1LogosSymbolRoute,
  getV1beta1NewsRoute,
  getV1beta1OptionsBarsRoute,
  getV1beta1OptionsMetaConditionsTicktypeRoute,
  getV1beta1OptionsMetaExchangesRoute,
  getV1beta1OptionsQuotesLatestRoute,
  getV1beta1OptionsSnapshotsRoute,
  getV1beta1OptionsSnapshotsUnderlyingSymbolRoute,
  getV1beta1OptionsTradesLatestRoute,
  getV1beta1OptionsTradesRoute,
  getV1beta1ScreenerMarketTypeMoversRoute,
  getV1beta1ScreenerStocksMostActivesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(getV1beta1EventsCorporateActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1FixedIncomeLatestPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1FixedIncomeLatestQuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1LogosSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsBarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsMetaConditionsTicktypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsMetaExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsQuotesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsSnapshotsUnderlyingSymbolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1OptionsTradesLatestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ScreenerMarketTypeMoversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ScreenerStocksMostActivesRoute, (c) => {
    throw new Error('Not implemented')
  })

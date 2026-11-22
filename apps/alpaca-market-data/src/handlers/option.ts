import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1OptionsBarsRoute,
  getV1beta1OptionsMetaConditionsTicktypeRoute,
  getV1beta1OptionsMetaExchangesRoute,
  getV1beta1OptionsQuotesLatestRoute,
  getV1beta1OptionsSnapshotsRoute,
  getV1beta1OptionsSnapshotsUnderlyingSymbolRoute,
  getV1beta1OptionsTradesLatestRoute,
  getV1beta1OptionsTradesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optionHandler = app
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

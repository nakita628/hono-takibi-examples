import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentChannelRulesRoute,
  getV1SupportedCountriesRoute,
  getV2SupportedCountriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const countriesHandler = app
  .openapi(getV1PaymentChannelRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SupportedCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SupportedCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })

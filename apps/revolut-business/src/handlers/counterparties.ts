import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCounterpartiesCountriesRoute,
  getCounterpartiesFieldsRoute,
  getCounterpartiesRoute,
  patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const counterpartiesHandler = app
  .openapi(getCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartiesCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartiesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })

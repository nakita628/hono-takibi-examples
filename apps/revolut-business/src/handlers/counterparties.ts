import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCounterpartyCounterpartyIdRoute,
  getCounterpartiesCountriesRoute,
  getCounterpartiesFieldsRoute,
  getCounterpartiesRoute,
  getCounterpartyCounterpartyIdRoute,
  patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute,
  postAccountNameValidationRoute,
  postCounterpartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const counterpartiesHandler = app
  .openapi(postAccountNameValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCounterpartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartiesCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartiesFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartyCounterpartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCounterpartyCounterpartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })

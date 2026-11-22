import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingTaxRatesIdRoute,
  getAccountingTaxRatesIdRoute,
  getAccountingTaxRatesRoute,
  patchAccountingTaxRatesIdRoute,
  postAccountingTaxRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getAccountingTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountingTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTaxRatesIdRoute,
  deleteAdminTaxRatesIdRulesRuleIdRoute,
  getAdminTaxRatesIdRoute,
  getAdminTaxRatesRoute,
  postAdminTaxRatesIdRoute,
  postAdminTaxRatesIdRulesRoute,
  postAdminTaxRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRatesHandler = app
  .openapi(getAdminTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRatesIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

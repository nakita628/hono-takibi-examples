import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPreprintProvidersIndexRoute,
  getPreprintProvidersPreprintProviderIdIndexRoute,
  getPreprintProvidersPreprintProviderIdLicensesIndexRoute,
  getPreprintProvidersPreprintProviderIdPreprintsIndexRoute,
  getPreprintProvidersPreprintProviderIdTaxonomiesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const preprintProvidersHandler = app
  .openapi(getPreprintProvidersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintProvidersPreprintProviderIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintProvidersPreprintProviderIdLicensesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintProvidersPreprintProviderIdPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPreprintProvidersPreprintProviderIdTaxonomiesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

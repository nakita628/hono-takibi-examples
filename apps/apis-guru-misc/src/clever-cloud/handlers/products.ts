import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsAddonprovidersProviderIdRoute,
  getProductsAddonprovidersProviderIdVersionsRoute,
  getProductsAddonprovidersRoute,
  getProductsCountriesRoute,
  getProductsCountrycodesRoute,
  getProductsInstancesRoute,
  getProductsInstancesTypeVersionRoute,
  getProductsMfaKindsRoute,
  getProductsPackagesRoute,
  getProductsPricesRoute,
  getProductsZonesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsAddonprovidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsAddonprovidersProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsAddonprovidersProviderIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsCountrycodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsInstancesTypeVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsMfaKindsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsZonesRoute, (c) => {
    throw new Error('Not implemented')
  })

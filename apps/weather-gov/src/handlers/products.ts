import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProductsLocationsLocationIdTypesRoute,
  getProductsLocationsRoute,
  getProductsProductIdRoute,
  getProductsRoute,
  getProductsTypesRoute,
  getProductsTypesTypeIdLocationsLocationIdLatestRoute,
  getProductsTypesTypeIdLocationsLocationIdRoute,
  getProductsTypesTypeIdLocationsRoute,
  getProductsTypesTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsTypesTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsTypesTypeIdLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsLocationsLocationIdTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsTypesTypeIdLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProductsTypesTypeIdLocationsLocationIdLatestRoute, (c) => {
    throw new Error('Not implemented')
  })

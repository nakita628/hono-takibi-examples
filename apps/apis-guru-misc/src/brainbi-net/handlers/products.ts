import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiProducts1137Route,
  getApiAnalyzePricingRoute,
  getApiProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getApiAnalyzePricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiProducts1137Route, (c) => {
    throw new Error('Not implemented')
  })

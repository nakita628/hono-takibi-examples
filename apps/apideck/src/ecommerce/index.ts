import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEcommerceCustomersIdRoute,
  getEcommerceCustomersRoute,
  getEcommerceOrdersIdRoute,
  getEcommerceOrdersRoute,
  getEcommerceProductsIdRoute,
  getEcommerceProductsRoute,
  getEcommerceStoreRoute,
} from './routes'
import {
  getEcommerceCustomersIdRouteHandler,
  getEcommerceCustomersRouteHandler,
  getEcommerceOrdersIdRouteHandler,
  getEcommerceOrdersRouteHandler,
  getEcommerceProductsIdRouteHandler,
  getEcommerceProductsRouteHandler,
  getEcommerceStoreRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEcommerceCustomersRoute, getEcommerceCustomersRouteHandler)
  .openapi(getEcommerceCustomersIdRoute, getEcommerceCustomersIdRouteHandler)
  .openapi(getEcommerceOrdersRoute, getEcommerceOrdersRouteHandler)
  .openapi(getEcommerceOrdersIdRoute, getEcommerceOrdersIdRouteHandler)
  .openapi(getEcommerceProductsRoute, getEcommerceProductsRouteHandler)
  .openapi(getEcommerceProductsIdRoute, getEcommerceProductsIdRouteHandler)
  .openapi(getEcommerceStoreRoute, getEcommerceStoreRouteHandler)

export default app

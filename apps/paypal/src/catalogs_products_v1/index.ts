import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CatalogsProductsProductIdRoute,
  getV1CatalogsProductsRoute,
  patchV1CatalogsProductsProductIdRoute,
  postV1CatalogsProductsRoute,
} from './routes'
import {
  getV1CatalogsProductsProductIdRouteHandler,
  getV1CatalogsProductsRouteHandler,
  patchV1CatalogsProductsProductIdRouteHandler,
  postV1CatalogsProductsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1CatalogsProductsRoute, postV1CatalogsProductsRouteHandler)
  .openapi(getV1CatalogsProductsRoute, getV1CatalogsProductsRouteHandler)
  .openapi(getV1CatalogsProductsProductIdRoute, getV1CatalogsProductsProductIdRouteHandler)
  .openapi(patchV1CatalogsProductsProductIdRoute, patchV1CatalogsProductsProductIdRouteHandler)

export default app

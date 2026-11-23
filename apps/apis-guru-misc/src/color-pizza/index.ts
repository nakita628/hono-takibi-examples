import { OpenAPIHono } from '@hono/zod-openapi'
import { getListsIndexRoute, getNamesIndexRoute, getRoute, getSwatchIndexRoute } from './routes'
import {
  getListsIndexRouteHandler,
  getNamesIndexRouteHandler,
  getRouteHandler,
  getSwatchIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getListsIndexRoute, getListsIndexRouteHandler)
  .openapi(getNamesIndexRoute, getNamesIndexRouteHandler)
  .openapi(getSwatchIndexRoute, getSwatchIndexRouteHandler)

export default app

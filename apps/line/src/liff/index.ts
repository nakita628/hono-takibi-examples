import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLiffV1AppsLiffIdRoute,
  getLiffV1AppsRoute,
  postLiffV1AppsRoute,
  putLiffV1AppsLiffIdRoute,
} from './routes'
import {
  deleteLiffV1AppsLiffIdRouteHandler,
  getLiffV1AppsRouteHandler,
  postLiffV1AppsRouteHandler,
  putLiffV1AppsLiffIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postLiffV1AppsRoute, postLiffV1AppsRouteHandler)
  .openapi(getLiffV1AppsRoute, getLiffV1AppsRouteHandler)
  .openapi(putLiffV1AppsLiffIdRoute, putLiffV1AppsLiffIdRouteHandler)
  .openapi(deleteLiffV1AppsLiffIdRoute, deleteLiffV1AppsLiffIdRouteHandler)

export default app

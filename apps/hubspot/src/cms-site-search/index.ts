import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCmsSiteSearch202609IndexedDataContentIdRoute,
  getCmsSiteSearch202609SearchRoute,
} from './routes'
import {
  getCmsSiteSearch202609IndexedDataContentIdRouteHandler,
  getCmsSiteSearch202609SearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCmsSiteSearch202609IndexedDataContentIdRoute,
    getCmsSiteSearch202609IndexedDataContentIdRouteHandler,
  )
  .openapi(getCmsSiteSearch202609SearchRoute, getCmsSiteSearch202609SearchRouteHandler)

export default app

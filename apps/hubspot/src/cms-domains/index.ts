import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsDomains202609DomainIdRoute, getCmsDomains202609Route } from './routes'
import {
  getCmsDomains202609DomainIdRouteHandler,
  getCmsDomains202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsDomains202609Route, getCmsDomains202609RouteHandler)
  .openapi(getCmsDomains202609DomainIdRoute, getCmsDomains202609DomainIdRouteHandler)

export default app

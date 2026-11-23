import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoute,
  getV1CrawlQueryRoute,
  getV1ImagesQueryRoute,
  getV1NewsQueryRoute,
  getV1SearchQueryRoute,
  postV1SerpIndexRoute,
} from './routes'
import {
  getRouteHandler,
  getV1CrawlQueryRouteHandler,
  getV1ImagesQueryRouteHandler,
  getV1NewsQueryRouteHandler,
  getV1SearchQueryRouteHandler,
  postV1SerpIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getV1CrawlQueryRoute, getV1CrawlQueryRouteHandler)
  .openapi(getV1ImagesQueryRoute, getV1ImagesQueryRouteHandler)
  .openapi(getV1NewsQueryRoute, getV1NewsQueryRouteHandler)
  .openapi(getV1SearchQueryRoute, getV1SearchQueryRouteHandler)
  .openapi(postV1SerpIndexRoute, postV1SerpIndexRouteHandler)

export default app

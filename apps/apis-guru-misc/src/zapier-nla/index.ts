import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CheckIndexRoute,
  getApiV1ConfigurationLinkIndexRoute,
  getApiV1ExposedIndexRoute,
  postApiV1ExposedExposedAppActionIdExecuteIndexRoute,
} from './routes'
import {
  getApiV1CheckIndexRouteHandler,
  getApiV1ConfigurationLinkIndexRouteHandler,
  getApiV1ExposedIndexRouteHandler,
  postApiV1ExposedExposedAppActionIdExecuteIndexRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1CheckIndexRoute, getApiV1CheckIndexRouteHandler)
  .openapi(getApiV1ConfigurationLinkIndexRoute, getApiV1ConfigurationLinkIndexRouteHandler)
  .openapi(getApiV1ExposedIndexRoute, getApiV1ExposedIndexRouteHandler)
  .openapi(
    postApiV1ExposedExposedAppActionIdExecuteIndexRoute,
    postApiV1ExposedExposedAppActionIdExecuteIndexRouteHandler,
  )

export default app

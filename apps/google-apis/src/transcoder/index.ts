import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentJobsRoute,
  getV1ParentJobTemplatesRoute,
  postV1ParentJobsRoute,
  postV1ParentJobTemplatesRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentJobsRouteHandler,
  getV1ParentJobTemplatesRouteHandler,
  postV1ParentJobsRouteHandler,
  postV1ParentJobTemplatesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1ParentJobTemplatesRoute, getV1ParentJobTemplatesRouteHandler)
  .openapi(postV1ParentJobTemplatesRoute, postV1ParentJobTemplatesRouteHandler)
  .openapi(getV1ParentJobsRoute, getV1ParentJobsRouteHandler)
  .openapi(postV1ParentJobsRoute, postV1ParentJobsRouteHandler)

export default app

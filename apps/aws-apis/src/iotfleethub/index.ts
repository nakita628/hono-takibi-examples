import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getApplicationsApplicationIdRoute,
  getApplicationsRoute,
  getTagsResourceArnRoute,
  patchApplicationsApplicationIdRoute,
  postApplicationsRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteApplicationsApplicationIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getApplicationsApplicationIdRouteHandler,
  getApplicationsRouteHandler,
  getTagsResourceArnRouteHandler,
  patchApplicationsApplicationIdRouteHandler,
  postApplicationsRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApplicationsRoute, postApplicationsRouteHandler)
  .openapi(getApplicationsRoute, getApplicationsRouteHandler)
  .openapi(deleteApplicationsApplicationIdRoute, deleteApplicationsApplicationIdRouteHandler)
  .openapi(getApplicationsApplicationIdRoute, getApplicationsApplicationIdRouteHandler)
  .openapi(patchApplicationsApplicationIdRoute, patchApplicationsApplicationIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

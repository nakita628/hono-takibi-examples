import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentEnvironmentIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getEnvironmentEnvironmentIdRoute,
  getEnvironmentRoute,
  getTagsResourceArnRoute,
  postEnvironmentRoute,
  postTagsResourceArnRoute,
  putEnvironmentEnvironmentIdRoute,
} from './routes'
import {
  deleteEnvironmentEnvironmentIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getEnvironmentEnvironmentIdRouteHandler,
  getEnvironmentRouteHandler,
  getTagsResourceArnRouteHandler,
  postEnvironmentRouteHandler,
  postTagsResourceArnRouteHandler,
  putEnvironmentEnvironmentIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEnvironmentRoute, postEnvironmentRouteHandler)
  .openapi(getEnvironmentRoute, getEnvironmentRouteHandler)
  .openapi(deleteEnvironmentEnvironmentIdRoute, deleteEnvironmentEnvironmentIdRouteHandler)
  .openapi(getEnvironmentEnvironmentIdRoute, getEnvironmentEnvironmentIdRouteHandler)
  .openapi(putEnvironmentEnvironmentIdRoute, putEnvironmentEnvironmentIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

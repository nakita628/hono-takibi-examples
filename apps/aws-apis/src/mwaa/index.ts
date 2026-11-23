import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getEnvironmentsNameRoute,
  getEnvironmentsRoute,
  getTagsResourceArnRoute,
  patchEnvironmentsNameRoute,
  postClitokenNameRoute,
  postMetricsEnvironmentsEnvironmentNameRoute,
  postTagsResourceArnRoute,
  postWebtokenNameRoute,
  putEnvironmentsNameRoute,
} from './routes'
import {
  deleteEnvironmentsNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getEnvironmentsNameRouteHandler,
  getEnvironmentsRouteHandler,
  getTagsResourceArnRouteHandler,
  patchEnvironmentsNameRouteHandler,
  postClitokenNameRouteHandler,
  postMetricsEnvironmentsEnvironmentNameRouteHandler,
  postTagsResourceArnRouteHandler,
  postWebtokenNameRouteHandler,
  putEnvironmentsNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postClitokenNameRoute, postClitokenNameRouteHandler)
  .openapi(putEnvironmentsNameRoute, putEnvironmentsNameRouteHandler)
  .openapi(deleteEnvironmentsNameRoute, deleteEnvironmentsNameRouteHandler)
  .openapi(getEnvironmentsNameRoute, getEnvironmentsNameRouteHandler)
  .openapi(patchEnvironmentsNameRoute, patchEnvironmentsNameRouteHandler)
  .openapi(postWebtokenNameRoute, postWebtokenNameRouteHandler)
  .openapi(getEnvironmentsRoute, getEnvironmentsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postMetricsEnvironmentsEnvironmentNameRoute,
    postMetricsEnvironmentsEnvironmentNameRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

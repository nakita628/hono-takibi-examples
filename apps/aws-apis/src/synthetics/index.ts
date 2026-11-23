import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCanaryNameRoute,
  deleteGroupGroupIdentifierRoute,
  deleteTagsResourceArnTagKeysRoute,
  getCanaryNameRoute,
  getGroupGroupIdentifierRoute,
  getTagsResourceArnRoute,
  patchCanaryNameRoute,
  patchGroupGroupIdentifierAssociateRoute,
  patchGroupGroupIdentifierDisassociateRoute,
  postCanariesLastRunRoute,
  postCanariesRoute,
  postCanaryNameRunsRoute,
  postCanaryNameStartRoute,
  postCanaryNameStopRoute,
  postCanaryRoute,
  postGroupGroupIdentifierResourcesRoute,
  postGroupRoute,
  postGroupsRoute,
  postResourceResourceArnGroupsRoute,
  postRuntimeVersionsRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deleteCanaryNameRouteHandler,
  deleteGroupGroupIdentifierRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getCanaryNameRouteHandler,
  getGroupGroupIdentifierRouteHandler,
  getTagsResourceArnRouteHandler,
  patchCanaryNameRouteHandler,
  patchGroupGroupIdentifierAssociateRouteHandler,
  patchGroupGroupIdentifierDisassociateRouteHandler,
  postCanariesLastRunRouteHandler,
  postCanariesRouteHandler,
  postCanaryNameRunsRouteHandler,
  postCanaryNameStartRouteHandler,
  postCanaryNameStopRouteHandler,
  postCanaryRouteHandler,
  postGroupGroupIdentifierResourcesRouteHandler,
  postGroupRouteHandler,
  postGroupsRouteHandler,
  postResourceResourceArnGroupsRouteHandler,
  postRuntimeVersionsRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchGroupGroupIdentifierAssociateRoute, patchGroupGroupIdentifierAssociateRouteHandler)
  .openapi(postCanaryRoute, postCanaryRouteHandler)
  .openapi(postGroupRoute, postGroupRouteHandler)
  .openapi(deleteCanaryNameRoute, deleteCanaryNameRouteHandler)
  .openapi(getCanaryNameRoute, getCanaryNameRouteHandler)
  .openapi(patchCanaryNameRoute, patchCanaryNameRouteHandler)
  .openapi(deleteGroupGroupIdentifierRoute, deleteGroupGroupIdentifierRouteHandler)
  .openapi(getGroupGroupIdentifierRoute, getGroupGroupIdentifierRouteHandler)
  .openapi(postCanariesRoute, postCanariesRouteHandler)
  .openapi(postCanariesLastRunRoute, postCanariesLastRunRouteHandler)
  .openapi(postRuntimeVersionsRoute, postRuntimeVersionsRouteHandler)
  .openapi(
    patchGroupGroupIdentifierDisassociateRoute,
    patchGroupGroupIdentifierDisassociateRouteHandler,
  )
  .openapi(postCanaryNameRunsRoute, postCanaryNameRunsRouteHandler)
  .openapi(postResourceResourceArnGroupsRoute, postResourceResourceArnGroupsRouteHandler)
  .openapi(postGroupGroupIdentifierResourcesRoute, postGroupGroupIdentifierResourcesRouteHandler)
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postCanaryNameStartRoute, postCanaryNameStartRouteHandler)
  .openapi(postCanaryNameStopRoute, postCanaryNameStopRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

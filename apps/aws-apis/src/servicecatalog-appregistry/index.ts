import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationAttributeGroupsAttributeGroupRoute,
  deleteApplicationsApplicationResourcesResourceTypeResourceRoute,
  deleteApplicationsApplicationRoute,
  deleteAttributeGroupsAttributeGroupRoute,
  deleteTagsResourceArnTagKeysRoute,
  getApplicationsApplicationAttributeGroupDetailsRoute,
  getApplicationsApplicationAttributeGroupsRoute,
  getApplicationsApplicationResourcesResourceTypeResourceRoute,
  getApplicationsApplicationResourcesRoute,
  getApplicationsApplicationRoute,
  getApplicationsRoute,
  getAttributeGroupsAttributeGroupRoute,
  getAttributeGroupsRoute,
  getConfigurationRoute,
  getTagsResourceArnRoute,
  patchApplicationsApplicationRoute,
  patchAttributeGroupsAttributeGroupRoute,
  postApplicationsRoute,
  postAttributeGroupsRoute,
  postSyncResourceTypeResourceRoute,
  postTagsResourceArnRoute,
  putApplicationsApplicationAttributeGroupsAttributeGroupRoute,
  putApplicationsApplicationResourcesResourceTypeResourceRoute,
  putConfigurationRoute,
} from './routes'
import {
  deleteApplicationsApplicationAttributeGroupsAttributeGroupRouteHandler,
  deleteApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  deleteApplicationsApplicationRouteHandler,
  deleteAttributeGroupsAttributeGroupRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getApplicationsApplicationAttributeGroupDetailsRouteHandler,
  getApplicationsApplicationAttributeGroupsRouteHandler,
  getApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  getApplicationsApplicationResourcesRouteHandler,
  getApplicationsApplicationRouteHandler,
  getApplicationsRouteHandler,
  getAttributeGroupsAttributeGroupRouteHandler,
  getAttributeGroupsRouteHandler,
  getConfigurationRouteHandler,
  getTagsResourceArnRouteHandler,
  patchApplicationsApplicationRouteHandler,
  patchAttributeGroupsAttributeGroupRouteHandler,
  postApplicationsRouteHandler,
  postAttributeGroupsRouteHandler,
  postSyncResourceTypeResourceRouteHandler,
  postTagsResourceArnRouteHandler,
  putApplicationsApplicationAttributeGroupsAttributeGroupRouteHandler,
  putApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  putConfigurationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    putApplicationsApplicationAttributeGroupsAttributeGroupRoute,
    putApplicationsApplicationAttributeGroupsAttributeGroupRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationAttributeGroupsAttributeGroupRoute,
    deleteApplicationsApplicationAttributeGroupsAttributeGroupRouteHandler,
  )
  .openapi(
    putApplicationsApplicationResourcesResourceTypeResourceRoute,
    putApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  )
  .openapi(
    deleteApplicationsApplicationResourcesResourceTypeResourceRoute,
    deleteApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  )
  .openapi(
    getApplicationsApplicationResourcesResourceTypeResourceRoute,
    getApplicationsApplicationResourcesResourceTypeResourceRouteHandler,
  )
  .openapi(postApplicationsRoute, postApplicationsRouteHandler)
  .openapi(getApplicationsRoute, getApplicationsRouteHandler)
  .openapi(postAttributeGroupsRoute, postAttributeGroupsRouteHandler)
  .openapi(getAttributeGroupsRoute, getAttributeGroupsRouteHandler)
  .openapi(deleteApplicationsApplicationRoute, deleteApplicationsApplicationRouteHandler)
  .openapi(getApplicationsApplicationRoute, getApplicationsApplicationRouteHandler)
  .openapi(patchApplicationsApplicationRoute, patchApplicationsApplicationRouteHandler)
  .openapi(
    deleteAttributeGroupsAttributeGroupRoute,
    deleteAttributeGroupsAttributeGroupRouteHandler,
  )
  .openapi(getAttributeGroupsAttributeGroupRoute, getAttributeGroupsAttributeGroupRouteHandler)
  .openapi(patchAttributeGroupsAttributeGroupRoute, patchAttributeGroupsAttributeGroupRouteHandler)
  .openapi(getConfigurationRoute, getConfigurationRouteHandler)
  .openapi(putConfigurationRoute, putConfigurationRouteHandler)
  .openapi(
    getApplicationsApplicationAttributeGroupsRoute,
    getApplicationsApplicationAttributeGroupsRouteHandler,
  )
  .openapi(
    getApplicationsApplicationResourcesRoute,
    getApplicationsApplicationResourcesRouteHandler,
  )
  .openapi(
    getApplicationsApplicationAttributeGroupDetailsRoute,
    getApplicationsApplicationAttributeGroupDetailsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(postSyncResourceTypeResourceRoute, postSyncResourceTypeResourceRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

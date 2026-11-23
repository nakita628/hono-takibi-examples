import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssetsIdRoute,
  deletePackagingConfigurationsIdRoute,
  deletePackagingGroupsIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAssetsIdRoute,
  getAssetsRoute,
  getPackagingConfigurationsIdRoute,
  getPackagingConfigurationsRoute,
  getPackagingGroupsIdRoute,
  getPackagingGroupsRoute,
  getTagsResourceArnRoute,
  postAssetsRoute,
  postPackagingConfigurationsRoute,
  postPackagingGroupsRoute,
  postTagsResourceArnRoute,
  putPackagingGroupsIdConfigureLogsRoute,
  putPackagingGroupsIdRoute,
} from './routes'
import {
  deleteAssetsIdRouteHandler,
  deletePackagingConfigurationsIdRouteHandler,
  deletePackagingGroupsIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAssetsIdRouteHandler,
  getAssetsRouteHandler,
  getPackagingConfigurationsIdRouteHandler,
  getPackagingConfigurationsRouteHandler,
  getPackagingGroupsIdRouteHandler,
  getPackagingGroupsRouteHandler,
  getTagsResourceArnRouteHandler,
  postAssetsRouteHandler,
  postPackagingConfigurationsRouteHandler,
  postPackagingGroupsRouteHandler,
  postTagsResourceArnRouteHandler,
  putPackagingGroupsIdConfigureLogsRouteHandler,
  putPackagingGroupsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putPackagingGroupsIdConfigureLogsRoute, putPackagingGroupsIdConfigureLogsRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(postPackagingConfigurationsRoute, postPackagingConfigurationsRouteHandler)
  .openapi(getPackagingConfigurationsRoute, getPackagingConfigurationsRouteHandler)
  .openapi(postPackagingGroupsRoute, postPackagingGroupsRouteHandler)
  .openapi(getPackagingGroupsRoute, getPackagingGroupsRouteHandler)
  .openapi(deleteAssetsIdRoute, deleteAssetsIdRouteHandler)
  .openapi(getAssetsIdRoute, getAssetsIdRouteHandler)
  .openapi(deletePackagingConfigurationsIdRoute, deletePackagingConfigurationsIdRouteHandler)
  .openapi(getPackagingConfigurationsIdRoute, getPackagingConfigurationsIdRouteHandler)
  .openapi(deletePackagingGroupsIdRoute, deletePackagingGroupsIdRouteHandler)
  .openapi(getPackagingGroupsIdRoute, getPackagingGroupsIdRouteHandler)
  .openapi(putPackagingGroupsIdRoute, putPackagingGroupsIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app

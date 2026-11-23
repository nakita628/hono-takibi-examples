import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesArnTagsRoute,
  patchResourcesArnTagsRoute,
  postDeleteGroupRoute,
  postGetAccountSettingsRoute,
  postGetGroupConfigurationRoute,
  postGetGroupQueryRoute,
  postGetGroupRoute,
  postGroupResourcesRoute,
  postGroupsListRoute,
  postGroupsRoute,
  postListGroupResourcesRoute,
  postPutGroupConfigurationRoute,
  postResourcesSearchRoute,
  postUngroupResourcesRoute,
  postUpdateAccountSettingsRoute,
  postUpdateGroupQueryRoute,
  postUpdateGroupRoute,
  putResourcesArnTagsRoute,
} from './routes'
import {
  getResourcesArnTagsRouteHandler,
  patchResourcesArnTagsRouteHandler,
  postDeleteGroupRouteHandler,
  postGetAccountSettingsRouteHandler,
  postGetGroupConfigurationRouteHandler,
  postGetGroupQueryRouteHandler,
  postGetGroupRouteHandler,
  postGroupResourcesRouteHandler,
  postGroupsListRouteHandler,
  postGroupsRouteHandler,
  postListGroupResourcesRouteHandler,
  postPutGroupConfigurationRouteHandler,
  postResourcesSearchRouteHandler,
  postUngroupResourcesRouteHandler,
  postUpdateAccountSettingsRouteHandler,
  postUpdateGroupQueryRouteHandler,
  postUpdateGroupRouteHandler,
  putResourcesArnTagsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGroupsRoute, postGroupsRouteHandler)
  .openapi(postDeleteGroupRoute, postDeleteGroupRouteHandler)
  .openapi(postGetAccountSettingsRoute, postGetAccountSettingsRouteHandler)
  .openapi(postGetGroupRoute, postGetGroupRouteHandler)
  .openapi(postGetGroupConfigurationRoute, postGetGroupConfigurationRouteHandler)
  .openapi(postGetGroupQueryRoute, postGetGroupQueryRouteHandler)
  .openapi(getResourcesArnTagsRoute, getResourcesArnTagsRouteHandler)
  .openapi(putResourcesArnTagsRoute, putResourcesArnTagsRouteHandler)
  .openapi(patchResourcesArnTagsRoute, patchResourcesArnTagsRouteHandler)
  .openapi(postGroupResourcesRoute, postGroupResourcesRouteHandler)
  .openapi(postListGroupResourcesRoute, postListGroupResourcesRouteHandler)
  .openapi(postGroupsListRoute, postGroupsListRouteHandler)
  .openapi(postPutGroupConfigurationRoute, postPutGroupConfigurationRouteHandler)
  .openapi(postResourcesSearchRoute, postResourcesSearchRouteHandler)
  .openapi(postUngroupResourcesRoute, postUngroupResourcesRouteHandler)
  .openapi(postUpdateAccountSettingsRoute, postUpdateAccountSettingsRouteHandler)
  .openapi(postUpdateGroupRoute, postUpdateGroupRouteHandler)
  .openapi(postUpdateGroupQueryRoute, postUpdateGroupQueryRouteHandler)

export default app

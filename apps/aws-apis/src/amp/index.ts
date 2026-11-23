import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  deleteWorkspacesWorkspaceIdLoggingRoute,
  deleteWorkspacesWorkspaceIdRoute,
  deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
  getTagsResourceArnRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  getWorkspacesWorkspaceIdLoggingRoute,
  getWorkspacesWorkspaceIdRoute,
  getWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
  getWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
  postTagsResourceArnRoute,
  postWorkspacesRoute,
  postWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  postWorkspacesWorkspaceIdAliasRoute,
  postWorkspacesWorkspaceIdLoggingRoute,
  postWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
  putWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
  putWorkspacesWorkspaceIdLoggingRoute,
  putWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  deleteWorkspacesWorkspaceIdLoggingRouteHandler,
  deleteWorkspacesWorkspaceIdRouteHandler,
  deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
  getTagsResourceArnRouteHandler,
  getWorkspacesRouteHandler,
  getWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  getWorkspacesWorkspaceIdLoggingRouteHandler,
  getWorkspacesWorkspaceIdRouteHandler,
  getWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
  getWorkspacesWorkspaceIdRulegroupsnamespacesRouteHandler,
  postTagsResourceArnRouteHandler,
  postWorkspacesRouteHandler,
  postWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  postWorkspacesWorkspaceIdAliasRouteHandler,
  postWorkspacesWorkspaceIdLoggingRouteHandler,
  postWorkspacesWorkspaceIdRulegroupsnamespacesRouteHandler,
  putWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  putWorkspacesWorkspaceIdLoggingRouteHandler,
  putWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
    postWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  )
  .openapi(
    deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
    deleteWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
    getWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  )
  .openapi(
    putWorkspacesWorkspaceIdAlertmanagerDefinitionRoute,
    putWorkspacesWorkspaceIdAlertmanagerDefinitionRouteHandler,
  )
  .openapi(postWorkspacesWorkspaceIdLoggingRoute, postWorkspacesWorkspaceIdLoggingRouteHandler)
  .openapi(deleteWorkspacesWorkspaceIdLoggingRoute, deleteWorkspacesWorkspaceIdLoggingRouteHandler)
  .openapi(getWorkspacesWorkspaceIdLoggingRoute, getWorkspacesWorkspaceIdLoggingRouteHandler)
  .openapi(putWorkspacesWorkspaceIdLoggingRoute, putWorkspacesWorkspaceIdLoggingRouteHandler)
  .openapi(
    postWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
    postWorkspacesWorkspaceIdRulegroupsnamespacesRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceIdRulegroupsnamespacesRoute,
    getWorkspacesWorkspaceIdRulegroupsnamespacesRouteHandler,
  )
  .openapi(postWorkspacesRoute, postWorkspacesRouteHandler)
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(
    deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
    deleteWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
  )
  .openapi(
    getWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
    getWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
  )
  .openapi(
    putWorkspacesWorkspaceIdRulegroupsnamespacesNameRoute,
    putWorkspacesWorkspaceIdRulegroupsnamespacesNameRouteHandler,
  )
  .openapi(deleteWorkspacesWorkspaceIdRoute, deleteWorkspacesWorkspaceIdRouteHandler)
  .openapi(getWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(postWorkspacesWorkspaceIdAliasRoute, postWorkspacesWorkspaceIdAliasRouteHandler)

export default app

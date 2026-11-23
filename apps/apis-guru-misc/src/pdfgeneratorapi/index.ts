import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTemplatesTemplateIdRoute,
  deleteWorkspacesWorkspaceIdRoute,
  getTemplatesRoute,
  getTemplatesTemplateIdRoute,
  getWorkspacesWorkspaceIdRoute,
  postTemplatesOutputRoute,
  postTemplatesRoute,
  postTemplatesTemplateIdCopyRoute,
  postTemplatesTemplateIdEditorRoute,
  postTemplatesTemplateIdOutputRoute,
  putTemplatesTemplateIdRoute,
} from './routes'
import {
  deleteTemplatesTemplateIdRouteHandler,
  deleteWorkspacesWorkspaceIdRouteHandler,
  getTemplatesRouteHandler,
  getTemplatesTemplateIdRouteHandler,
  getWorkspacesWorkspaceIdRouteHandler,
  postTemplatesOutputRouteHandler,
  postTemplatesRouteHandler,
  postTemplatesTemplateIdCopyRouteHandler,
  postTemplatesTemplateIdEditorRouteHandler,
  postTemplatesTemplateIdOutputRouteHandler,
  putTemplatesTemplateIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getTemplatesRoute, getTemplatesRouteHandler)
  .openapi(postTemplatesRoute, postTemplatesRouteHandler)
  .openapi(postTemplatesOutputRoute, postTemplatesOutputRouteHandler)
  .openapi(deleteTemplatesTemplateIdRoute, deleteTemplatesTemplateIdRouteHandler)
  .openapi(getTemplatesTemplateIdRoute, getTemplatesTemplateIdRouteHandler)
  .openapi(putTemplatesTemplateIdRoute, putTemplatesTemplateIdRouteHandler)
  .openapi(postTemplatesTemplateIdCopyRoute, postTemplatesTemplateIdCopyRouteHandler)
  .openapi(postTemplatesTemplateIdEditorRoute, postTemplatesTemplateIdEditorRouteHandler)
  .openapi(postTemplatesTemplateIdOutputRoute, postTemplatesTemplateIdOutputRouteHandler)
  .openapi(deleteWorkspacesWorkspaceIdRoute, deleteWorkspacesWorkspaceIdRouteHandler)
  .openapi(getWorkspacesWorkspaceIdRoute, getWorkspacesWorkspaceIdRouteHandler)

export default app

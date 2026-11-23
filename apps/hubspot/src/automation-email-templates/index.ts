import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomationEmailTemplates202609FoldersRoute,
  getAutomationEmailTemplates202609Route,
  getAutomationEmailTemplates202609TemplateIdRoute,
  patchAutomationEmailTemplates202609TemplateIdRoute,
  postAutomationEmailTemplates202609Route,
} from './routes'
import {
  getAutomationEmailTemplates202609FoldersRouteHandler,
  getAutomationEmailTemplates202609RouteHandler,
  getAutomationEmailTemplates202609TemplateIdRouteHandler,
  patchAutomationEmailTemplates202609TemplateIdRouteHandler,
  postAutomationEmailTemplates202609RouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAutomationEmailTemplates202609Route, getAutomationEmailTemplates202609RouteHandler)
  .openapi(postAutomationEmailTemplates202609Route, postAutomationEmailTemplates202609RouteHandler)
  .openapi(
    getAutomationEmailTemplates202609FoldersRoute,
    getAutomationEmailTemplates202609FoldersRouteHandler,
  )
  .openapi(
    getAutomationEmailTemplates202609TemplateIdRoute,
    getAutomationEmailTemplates202609TemplateIdRouteHandler,
  )
  .openapi(
    patchAutomationEmailTemplates202609TemplateIdRoute,
    patchAutomationEmailTemplates202609TemplateIdRouteHandler,
  )

export default app

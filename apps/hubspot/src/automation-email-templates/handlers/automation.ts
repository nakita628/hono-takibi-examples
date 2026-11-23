import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAutomationEmailTemplates202609FoldersRoute,
  getAutomationEmailTemplates202609Route,
  getAutomationEmailTemplates202609TemplateIdRoute,
  patchAutomationEmailTemplates202609TemplateIdRoute,
  postAutomationEmailTemplates202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const automationHandler = app
  .openapi(getAutomationEmailTemplates202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationEmailTemplates202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationEmailTemplates202609FoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationEmailTemplates202609TemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAutomationEmailTemplates202609TemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

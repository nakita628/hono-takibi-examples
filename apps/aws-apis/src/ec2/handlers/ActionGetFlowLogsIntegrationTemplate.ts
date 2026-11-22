import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetFlowLogsIntegrationTemplateRoute,
  postActionGetFlowLogsIntegrationTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetFlowLogsIntegrationTemplateHandler = app
  .openapi(getActionGetFlowLogsIntegrationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetFlowLogsIntegrationTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

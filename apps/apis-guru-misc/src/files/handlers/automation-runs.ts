import { OpenAPIHono } from '@hono/zod-openapi'
import { getAutomationRunsIdRoute, getAutomationRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const automationRunsHandler = app
  .openapi(getAutomationRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationRunsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

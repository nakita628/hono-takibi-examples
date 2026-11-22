import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactFlowModulesSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const contactFlowModulesSummaryHandler = app.openapi(
  getContactFlowModulesSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

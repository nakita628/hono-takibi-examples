import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactFlowsSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const contactFlowsSummaryHandler = app.openapi(
  getContactFlowsSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

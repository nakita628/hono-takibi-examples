import { OpenAPIHono } from '@hono/zod-openapi'
import { postSecurityMicrosoftGraphSecurityRunHuntingQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const securitySecurityActionsHandler = app.openapi(
  postSecurityMicrosoftGraphSecurityRunHuntingQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

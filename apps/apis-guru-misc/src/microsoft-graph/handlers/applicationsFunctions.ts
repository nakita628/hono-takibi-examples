import { OpenAPIHono } from '@hono/zod-openapi'
import { getApplicationsMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationsFunctionsHandler = app.openapi(
  getApplicationsMicrosoftGraphDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

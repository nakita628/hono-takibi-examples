import { OpenAPIHono } from '@hono/zod-openapi'
import { getContactsMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const contactsFunctionsHandler = app.openapi(getContactsMicrosoftGraphDeltaRoute, (c) => {
  throw new Error('Not implemented')
})

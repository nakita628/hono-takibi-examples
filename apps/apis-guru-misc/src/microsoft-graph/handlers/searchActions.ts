import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchMicrosoftGraphQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const searchActionsHandler = app.openapi(postSearchMicrosoftGraphQueryRoute, (c) => {
  throw new Error('Not implemented')
})

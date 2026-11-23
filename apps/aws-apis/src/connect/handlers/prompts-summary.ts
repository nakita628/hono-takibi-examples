import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromptsSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const promptsSummaryHandler = app.openapi(getPromptsSummaryInstanceIdRoute, (c) => {
  throw new Error('Not implemented')
})

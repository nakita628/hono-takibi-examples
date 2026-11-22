import { OpenAPIHono } from '@hono/zod-openapi'
import { postCopilotRetrievalRoute } from '../routes'

const app = new OpenAPIHono()

export const copilotCopilotRootActionsHandler = app.openapi(postCopilotRetrievalRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteAiSessionsAiSessionIdRoute, getAiSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const aiSessionsHandler = app
  .openapi(getAiSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiSessionsAiSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

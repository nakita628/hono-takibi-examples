import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteQueuedSavingsPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteQueuedSavingsPlanHandler = app.openapi(postDeleteQueuedSavingsPlanRoute, (c) => {
  throw new Error('Not implemented')
})

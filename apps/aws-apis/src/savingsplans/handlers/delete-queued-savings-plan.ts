import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteQueuedSavingsPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteQueuedSavingsPlanHandler = app.openapi(postDeleteQueuedSavingsPlanRoute, (c) => {
  throw new Error('Not implemented')
})

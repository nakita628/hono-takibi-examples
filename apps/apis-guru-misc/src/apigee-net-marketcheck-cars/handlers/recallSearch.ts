import { OpenAPIHono } from '@hono/zod-openapi'
import { getCarRecallVinRoute } from '../routes'

const app = new OpenAPIHono()

export const recallSearchHandler = app.openapi(getCarRecallVinRoute, (c) => {
  throw new Error('Not implemented')
})

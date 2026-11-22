import { OpenAPIHono } from '@hono/zod-openapi'
import { getTopupsRoute } from '../routes'

const app = new OpenAPIHono()

export const topupsHandler = app.openapi(getTopupsRoute, (c) => {
  throw new Error('Not implemented')
})

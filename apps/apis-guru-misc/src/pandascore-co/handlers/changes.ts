import { OpenAPIHono } from '@hono/zod-openapi'
import { getChangesRoute } from '../routes'

const app = new OpenAPIHono()

export const changesHandler = app.openapi(getChangesRoute, (c) => {
  throw new Error('Not implemented')
})

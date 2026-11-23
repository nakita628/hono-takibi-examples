import { OpenAPIHono } from '@hono/zod-openapi'
import { getParentsSha1CountCursorRoute } from '../routes'

const app = new OpenAPIHono()

export const parentsHandler = app.openapi(getParentsSha1CountCursorRoute, (c) => {
  throw new Error('Not implemented')
})

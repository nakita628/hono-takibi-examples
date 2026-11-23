import { OpenAPIHono } from '@hono/zod-openapi'
import { getChildrenSha1CountCursorRoute } from '../routes'

const app = new OpenAPIHono()

export const childrenHandler = app.openapi(getChildrenSha1CountCursorRoute, (c) => {
  throw new Error('Not implemented')
})

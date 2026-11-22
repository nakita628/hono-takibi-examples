import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ListenRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(postV1ListenRoute, (c) => {
  throw new Error('Not implemented')
})

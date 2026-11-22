import { OpenAPIHono } from '@hono/zod-openapi'
import { postUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const uuidParsingHandler = app.openapi(postUuidRoute, (c) => {
  throw new Error('Not implemented')
})

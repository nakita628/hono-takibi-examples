import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1MediaResourceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(postV1MediaResourceNameRoute, (c) => {
  throw new Error('Not implemented')
})

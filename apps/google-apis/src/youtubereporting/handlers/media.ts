import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1MediaResourceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app.openapi(getV1MediaResourceNameRoute, (c) => {
  throw new Error('Not implemented')
})

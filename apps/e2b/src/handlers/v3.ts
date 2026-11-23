import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3TemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app.openapi(postV3TemplatesRoute, (c) => {
  throw new Error('Not implemented')
})

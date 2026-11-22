import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1TemplatesPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app.openapi(postV1TemplatesPreviewRoute, (c) => {
  throw new Error('Not implemented')
})

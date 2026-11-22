import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1TemplatesPreviewHashRoute, postApiV1TemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(postApiV1TemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1TemplatesPreviewHashRoute, (c) => {
    throw new Error('Not implemented')
  })

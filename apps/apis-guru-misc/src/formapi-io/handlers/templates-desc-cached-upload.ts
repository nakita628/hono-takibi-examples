import { OpenAPIHono } from '@hono/zod-openapi'
import { postTemplatesDescCachedUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesDescCachedUploadHandler = app.openapi(
  postTemplatesDescCachedUploadRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

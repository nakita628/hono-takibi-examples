import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app.openapi(postImportImagesRoute, (c) => {
  throw new Error('Not implemented')
})

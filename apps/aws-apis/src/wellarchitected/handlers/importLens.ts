import { OpenAPIHono } from '@hono/zod-openapi'
import { putImportLensRoute } from '../routes'

const app = new OpenAPIHono()

export const importLensHandler = app.openapi(putImportLensRoute, (c) => {
  throw new Error('Not implemented')
})

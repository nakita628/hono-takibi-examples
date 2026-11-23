import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsDeleteHandler = app.openapi(postDocumentsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsEmptyTrashRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsEmptyTrashHandler = app.openapi(postDocumentsEmptyTrashRoute, (c) => {
  throw new Error('Not implemented')
})

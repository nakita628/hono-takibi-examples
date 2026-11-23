import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsArchiveHandler = app.openapi(postDocumentsArchiveRoute, (c) => {
  throw new Error('Not implemented')
})

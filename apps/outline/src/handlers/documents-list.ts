import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsListRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsListHandler = app.openapi(postDocumentsListRoute, (c) => {
  throw new Error('Not implemented')
})

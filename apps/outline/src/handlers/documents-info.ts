import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsInfoHandler = app.openapi(postDocumentsInfoRoute, (c) => {
  throw new Error('Not implemented')
})

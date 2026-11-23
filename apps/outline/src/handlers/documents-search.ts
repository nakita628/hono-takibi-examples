import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsSearchHandler = app.openapi(postDocumentsSearchRoute, (c) => {
  throw new Error('Not implemented')
})

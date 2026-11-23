import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsDeletedRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsDeletedHandler = app.openapi(postDocumentsDeletedRoute, (c) => {
  throw new Error('Not implemented')
})

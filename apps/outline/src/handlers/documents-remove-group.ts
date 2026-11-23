import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsRemoveGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsRemoveGroupHandler = app.openapi(postDocumentsRemoveGroupRoute, (c) => {
  throw new Error('Not implemented')
})

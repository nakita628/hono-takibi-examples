import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsAddGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsAddGroupHandler = app.openapi(postDocumentsAddGroupRoute, (c) => {
  throw new Error('Not implemented')
})

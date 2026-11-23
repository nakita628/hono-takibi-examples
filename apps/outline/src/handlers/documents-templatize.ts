import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsTemplatizeRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsTemplatizeHandler = app.openapi(postDocumentsTemplatizeRoute, (c) => {
  throw new Error('Not implemented')
})

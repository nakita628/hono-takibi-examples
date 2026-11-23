import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsInsightsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsInsightsHandler = app.openapi(postDocumentsInsightsRoute, (c) => {
  throw new Error('Not implemented')
})

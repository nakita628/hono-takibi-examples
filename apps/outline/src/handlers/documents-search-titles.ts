import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsSearchTitlesRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsSearchTitlesHandler = app.openapi(postDocumentsSearchTitlesRoute, (c) => {
  throw new Error('Not implemented')
})

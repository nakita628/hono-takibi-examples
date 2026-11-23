import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocumentLinksRoute } from '../routes'

const app = new OpenAPIHono()

export const documentLinksHandler = app.openapi(getDocumentLinksRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postV0WebsetsPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const websetsPreviewHandler = app.openapi(postV0WebsetsPreviewRoute, (c) => {
  throw new Error('Not implemented')
})

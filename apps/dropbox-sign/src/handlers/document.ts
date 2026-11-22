import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentDetectFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentHandler = app.openapi(postDocumentDetectFieldsRoute, (c) => {
  throw new Error('Not implemented')
})

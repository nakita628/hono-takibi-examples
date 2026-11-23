import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocumentsMembershipsRoute } from '../routes'

const app = new OpenAPIHono()

export const documentsMembershipsHandler = app.openapi(postDocumentsMembershipsRoute, (c) => {
  throw new Error('Not implemented')
})

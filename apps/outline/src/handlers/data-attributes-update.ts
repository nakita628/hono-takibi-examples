import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataAttributesUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAttributesUpdateHandler = app.openapi(postDataAttributesUpdateRoute, (c) => {
  throw new Error('Not implemented')
})

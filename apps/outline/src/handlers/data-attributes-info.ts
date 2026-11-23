import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataAttributesInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const dataAttributesInfoHandler = app.openapi(postDataAttributesInfoRoute, (c) => {
  throw new Error('Not implemented')
})

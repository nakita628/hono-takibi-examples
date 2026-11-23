import { OpenAPIHono } from '@hono/zod-openapi'
import { postXMLtoJSONRoute } from '../routes'

const app = new OpenAPIHono()

export const xmLtoJsonHandler = app.openapi(postXMLtoJSONRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryXMLRoute } from '../routes'

const app = new OpenAPIHono()

export const queryXmlHandler = app.openapi(postQueryXMLRoute, (c) => {
  throw new Error('Not implemented')
})

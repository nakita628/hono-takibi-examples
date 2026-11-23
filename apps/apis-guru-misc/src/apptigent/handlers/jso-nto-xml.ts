import { OpenAPIHono } from '@hono/zod-openapi'
import { postJSONtoXMLRoute } from '../routes'

const app = new OpenAPIHono()

export const jsoNtoXmlHandler = app.openapi(postJSONtoXMLRoute, (c) => {
  throw new Error('Not implemented')
})

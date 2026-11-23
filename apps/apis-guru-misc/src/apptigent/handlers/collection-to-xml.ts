import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionToXMLRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionToXmlHandler = app.openapi(postCollectionToXMLRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postCollectionToJSONRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionToJsonHandler = app.openapi(postCollectionToJSONRoute, (c) => {
  throw new Error('Not implemented')
})

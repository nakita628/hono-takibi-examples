import { OpenAPIHono } from '@hono/zod-openapi'
import { postSplitCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const splitCollectionHandler = app.openapi(postSplitCollectionRoute, (c) => {
  throw new Error('Not implemented')
})

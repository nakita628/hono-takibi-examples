import { OpenAPIHono } from '@hono/zod-openapi'
import { postReplaceValuesInCollectionRoute } from '../routes'

const app = new OpenAPIHono()

export const replaceValuesInCollectionHandler = app.openapi(
  postReplaceValuesInCollectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

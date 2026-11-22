import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexesIndexUidSimilarRoute, postIndexesIndexUidSimilarRoute } from '../routes'

const app = new OpenAPIHono()

export const similarDocumentsHandler = app
  .openapi(getIndexesIndexUidSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesIndexUidSimilarRoute, (c) => {
    throw new Error('Not implemented')
  })

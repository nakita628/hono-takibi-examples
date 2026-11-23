import { OpenAPIHono } from '@hono/zod-openapi'
import { getReadOperationsOperationIdRoute, postReadCoreAsyncBatchAnalyzeRoute } from '../routes'

const app = new OpenAPIHono()

export const readHandler = app
  .openapi(postReadCoreAsyncBatchAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReadOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

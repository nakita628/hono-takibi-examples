import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindingIdAnalyzerArnRoute, postFindingRoute, putFindingRoute } from '../routes'

const app = new OpenAPIHono()

export const findingHandler = app
  .openapi(getFindingIdAnalyzerArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFindingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFindingRoute, (c) => {
    throw new Error('Not implemented')
  })

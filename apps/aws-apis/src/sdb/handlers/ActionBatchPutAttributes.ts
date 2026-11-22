import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionBatchPutAttributesRoute, postActionBatchPutAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionBatchPutAttributesHandler = app
  .openapi(getActionBatchPutAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchPutAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })

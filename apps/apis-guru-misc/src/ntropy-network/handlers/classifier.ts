import { OpenAPIHono } from '@hono/zod-openapi'
import { getClassifierBusinessBatchIdRoute, getClassifierConsumerBatchIdRoute } from '../routes'

const app = new OpenAPIHono()

export const classifierHandler = app
  .openapi(getClassifierBusinessBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClassifierConsumerBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

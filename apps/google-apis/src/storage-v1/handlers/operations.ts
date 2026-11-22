import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBBucketOperationsOperationIdRoute,
  getBBucketOperationsRoute,
  postBBucketOperationsOperationIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getBBucketOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBBucketOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBBucketOperationsOperationIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

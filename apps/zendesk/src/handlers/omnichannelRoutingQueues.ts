import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2QueuesQueueIdRoute,
  getApiV2QueuesDefinitionsRoute,
  getApiV2QueuesQueueIdRoute,
  getApiV2QueuesRoute,
  patchApiV2QueuesOrderRoute,
  postApiV2QueuesRoute,
  putApiV2QueuesQueueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelRoutingQueuesHandler = app
  .openapi(getApiV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2QueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2QueuesDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2QueuesOrderRoute, (c) => {
    throw new Error('Not implemented')
  })

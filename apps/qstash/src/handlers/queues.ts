import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2QueuesQueueNameRoute,
  getV2QueuesQueueNameRoute,
  getV2QueuesRoute,
  postV2QueuesQueueNamePauseRoute,
  postV2QueuesQueueNameResumeRoute,
  postV2QueuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(postV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2QueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2QueuesQueueNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QueuesQueueNamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2QueuesQueueNameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })

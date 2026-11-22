import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdQueuesQueueIdRoute,
  getAppsAppIdQueuesRoute,
  postAppsAppIdQueuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const queuesHandler = app
  .openapi(getAppsAppIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdQueuesQueueIdRoute, (c) => {
    throw new Error('Not implemented')
  })

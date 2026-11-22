import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlmawsV1TaskListsRsLendingRequestsRoute,
  postAlmawsV1TaskListsRsLendingRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lendingRequestsHandler = app
  .openapi(getAlmawsV1TaskListsRsLendingRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsRsLendingRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })

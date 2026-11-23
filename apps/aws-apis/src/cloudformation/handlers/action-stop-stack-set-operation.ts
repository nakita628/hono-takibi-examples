import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionStopStackSetOperationRoute,
  postActionStopStackSetOperationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionStopStackSetOperationHandler = app
  .openapi(getActionStopStackSetOperationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopStackSetOperationRoute, (c) => {
    throw new Error('Not implemented')
  })

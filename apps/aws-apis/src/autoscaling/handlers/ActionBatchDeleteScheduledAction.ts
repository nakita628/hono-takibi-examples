import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionBatchDeleteScheduledActionRoute,
  postActionBatchDeleteScheduledActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionBatchDeleteScheduledActionHandler = app
  .openapi(getActionBatchDeleteScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionBatchDeleteScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })

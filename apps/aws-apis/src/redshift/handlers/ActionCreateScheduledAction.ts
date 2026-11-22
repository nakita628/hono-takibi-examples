import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateScheduledActionRoute,
  postActionCreateScheduledActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateScheduledActionHandler = app
  .openapi(getActionCreateScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })

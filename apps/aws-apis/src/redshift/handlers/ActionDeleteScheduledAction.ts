import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteScheduledActionRoute,
  postActionDeleteScheduledActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteScheduledActionHandler = app
  .openapi(getActionDeleteScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })

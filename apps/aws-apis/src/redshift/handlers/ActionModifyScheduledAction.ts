import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyScheduledActionRoute,
  postActionModifyScheduledActionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyScheduledActionHandler = app
  .openapi(getActionModifyScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyScheduledActionRoute, (c) => {
    throw new Error('Not implemented')
  })

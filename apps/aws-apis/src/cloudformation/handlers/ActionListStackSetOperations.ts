import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListStackSetOperationsRoute,
  postActionListStackSetOperationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListStackSetOperationsHandler = app
  .openapi(getActionListStackSetOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListStackSetOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })

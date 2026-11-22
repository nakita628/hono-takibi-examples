import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyCurrentDBClusterCapacityRoute,
  postActionModifyCurrentDBClusterCapacityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyCurrentDBClusterCapacityHandler = app
  .openapi(getActionModifyCurrentDBClusterCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyCurrentDBClusterCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })

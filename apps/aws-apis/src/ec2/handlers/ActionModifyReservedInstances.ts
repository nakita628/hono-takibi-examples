import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyReservedInstancesRoute,
  postActionModifyReservedInstancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyReservedInstancesHandler = app
  .openapi(getActionModifyReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyReservedInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })

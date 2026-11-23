import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStopDBInstanceRoute, postActionStopDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStopDbInstanceHandler = app
  .openapi(getActionStopDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStopDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

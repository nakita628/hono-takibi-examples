import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartDBInstanceRoute, postActionStartDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionStartDBInstanceHandler = app
  .openapi(getActionStartDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

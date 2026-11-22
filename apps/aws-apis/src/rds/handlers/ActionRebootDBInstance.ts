import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRebootDBInstanceRoute, postActionRebootDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRebootDBInstanceHandler = app
  .openapi(getActionRebootDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRebootDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

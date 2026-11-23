import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDBInstanceRoute, postActionCreateDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateDbInstanceHandler = app
  .openapi(getActionCreateDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

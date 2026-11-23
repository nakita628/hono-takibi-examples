import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDBInstanceRoute, postActionDeleteDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbInstanceHandler = app
  .openapi(getActionDeleteDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

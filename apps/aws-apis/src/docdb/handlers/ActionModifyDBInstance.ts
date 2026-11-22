import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyDBInstanceRoute, postActionModifyDBInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDBInstanceHandler = app
  .openapi(getActionModifyDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDBInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })

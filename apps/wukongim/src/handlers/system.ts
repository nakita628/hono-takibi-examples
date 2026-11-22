import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute, getMigrateResultRoute } from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMigrateResultRoute, (c) => {
    throw new Error('Not implemented')
  })

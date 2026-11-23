import { OpenAPIHono } from '@hono/zod-openapi'
import { getMigrationExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const migrationExchangeHandler = app.openapi(getMigrationExchangeRoute, (c) => {
  throw new Error('Not implemented')
})

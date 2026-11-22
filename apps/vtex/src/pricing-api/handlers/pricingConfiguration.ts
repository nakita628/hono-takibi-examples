import { OpenAPIHono } from '@hono/zod-openapi'
import { getPricingConfigRoute, getPricingMigrationRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingConfigurationHandler = app
  .openapi(getPricingConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPricingMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })

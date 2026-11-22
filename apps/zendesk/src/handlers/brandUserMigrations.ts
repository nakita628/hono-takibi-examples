import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BrandsBrandIdUserMigrationsMigrationIdRoute,
  getApiV2BrandsBrandIdUserMigrationsRoute,
  postApiV2BrandsBrandIdUserMigrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandUserMigrationsHandler = app
  .openapi(getApiV2BrandsBrandIdUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BrandsBrandIdUserMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BrandsBrandIdUserMigrationsMigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

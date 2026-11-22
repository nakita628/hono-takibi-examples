import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPc2MigrationsPc2MigrationIdRoute,
  postPc2MigrationsPc2MigrationIdContactSupportRoute,
  postPc2MigrationsPc2MigrationIdInitiateRoute,
  postPc2MigrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pc2MigrationsHandler = app
  .openapi(postPc2MigrationsPc2MigrationIdContactSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationsPc2MigrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationsPc2MigrationIdInitiateRoute, (c) => {
    throw new Error('Not implemented')
  })

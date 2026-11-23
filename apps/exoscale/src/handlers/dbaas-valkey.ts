import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDbaasValkeyNameRoute,
  deleteDbaasValkeyServiceNameUserUsernameRoute,
  getDbaasValkeyNameRoute,
  getDbaasValkeyServiceNameUserRoute,
  getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute,
  postDbaasValkeyNameMigrationStopRoute,
  postDbaasValkeyNameRoute,
  postDbaasValkeyServiceNameUserRoute,
  putDbaasValkeyNameMaintenanceStartRoute,
  putDbaasValkeyNameRoute,
  putDbaasValkeyServiceNameUserUsernamePasswordResetRoute,
  putDbaasValkeyServiceNameUserUsernameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasValkeyHandler = app
  .openapi(postDbaasValkeyNameMigrationStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyServiceNameUserUsernamePasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasValkeyServiceNameUserUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDbaasValkeyNameMaintenanceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyServiceNameUserUsernamePasswordRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDbaasValkeyServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasValkeyServiceNameUserRoute, (c) => {
    throw new Error('Not implemented')
  })

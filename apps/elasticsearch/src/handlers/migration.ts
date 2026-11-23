import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMigrationDeprecationsRoute,
  getMigrationReindexIndexStatusRoute,
  getMigrationSystemFeaturesRoute,
  postMigrationReindexIndexCancelRoute,
  postMigrationReindexRoute,
  postMigrationSystemFeaturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const migrationHandler = app
  .openapi(postMigrationReindexIndexCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMigrationReindexIndexStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMigrationReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMigrationDeprecationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMigrationSystemFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMigrationSystemFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPc2MigrationItemsApplicableItemsRoute,
  getPc2MigrationItemsPc2MigrationItemIdRoute,
  getPc2MigrationItemsRoute,
  postPc2MigrationItemsPc2MigrationItemIdDeleteRoute,
  postPc2MigrationItemsPc2MigrationItemIdRoute,
  postPc2MigrationItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pc2MigrationItemsHandler = app
  .openapi(getPc2MigrationItemsPc2MigrationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemsPc2MigrationItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemsPc2MigrationItemIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationItemsApplicableItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

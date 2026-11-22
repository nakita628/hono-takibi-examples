import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPc2MigrationItemPricesPc2MigrationItemPriceIdRoute,
  getPc2MigrationItemPricesRoute,
  postPc2MigrationItemPricesPc2MigrationItemPriceIdDeleteRoute,
  postPc2MigrationItemPricesPc2MigrationItemPriceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pc2MigrationItemPricesHandler = app
  .openapi(getPc2MigrationItemPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemPricesPc2MigrationItemPriceIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationItemPricesPc2MigrationItemPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemPricesPc2MigrationItemPriceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

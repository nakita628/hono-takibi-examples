import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPc2MigrationItemFamiliesPc2MigrationItemFamilyIdRoute,
  getPc2MigrationItemFamiliesRoute,
  postPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDeleteRoute,
  postPc2MigrationItemFamiliesPc2MigrationItemFamilyIdRoute,
  postPc2MigrationItemFamiliesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pc2MigrationItemFamiliesHandler = app
  .openapi(postPc2MigrationItemFamiliesPc2MigrationItemFamilyIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationItemFamiliesPc2MigrationItemFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemFamiliesPc2MigrationItemFamilyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPc2MigrationItemFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPc2MigrationItemFamiliesRoute, (c) => {
    throw new Error('Not implemented')
  })

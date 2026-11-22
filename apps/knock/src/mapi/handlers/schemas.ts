import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1SchemasItemTypeRoute,
  getV1SchemasRoute,
  putV1SchemasItemTypeRoute,
  putV1SchemasItemTypeValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getV1SchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SchemasItemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchemasItemTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SchemasItemTypeValidateRoute, (c) => {
    throw new Error('Not implemented')
  })

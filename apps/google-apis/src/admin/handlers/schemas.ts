import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  getAdminDirectoryV1CustomerCustomerIdSchemasRoute,
  getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  postAdminDirectoryV1CustomerCustomerIdSchemasRoute,
  putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerIdSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

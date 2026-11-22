import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VendorsIdRoute,
  getApiV1VendorsCreateRoute,
  getApiV1VendorsIdEditRoute,
  getApiV1VendorsIdRoute,
  getApiV1VendorsRoute,
  postApiV1VendorsBulkRoute,
  postApiV1VendorsIdUploadRoute,
  postApiV1VendorsRoute,
  putApiV1VendorsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vendorsHandler = app
  .openapi(getApiV1VendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VendorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VendorsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VendorsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })

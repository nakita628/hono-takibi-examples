import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ClientsIdRoute,
  getApiV1ClientsCreateRoute,
  getApiV1ClientsIdEditRoute,
  getApiV1ClientsIdRoute,
  getApiV1ClientsRoute,
  postApiV1ClientsBulkRoute,
  postApiV1ClientsClientUpdateTaxDataRoute,
  postApiV1ClientsIdMergeableClientHashedIdMergeRoute,
  postApiV1ClientsIdPurgeRoute,
  postApiV1ClientsIdUploadRoute,
  postApiV1ClientsRoute,
  postApiV1ClientStatementRoute,
  postApiV1ReactivateEmailBounceIdRoute,
  putApiV1ClientsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app
  .openapi(getApiV1ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ClientsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ClientsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdPurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsIdMergeableClientHashedIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReactivateEmailBounceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ClientsClientUpdateTaxDataRoute, (c) => {
    throw new Error('Not implemented')
  })

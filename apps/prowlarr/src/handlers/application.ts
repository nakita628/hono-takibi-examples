import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ApplicationsBulkRoute,
  deleteApiV1ApplicationsIdRoute,
  getApiV1ApplicationsIdRoute,
  getApiV1ApplicationsRoute,
  getApiV1ApplicationsSchemaRoute,
  postApiV1ApplicationsActionNameRoute,
  postApiV1ApplicationsRoute,
  postApiV1ApplicationsTestallRoute,
  postApiV1ApplicationsTestRoute,
  putApiV1ApplicationsBulkRoute,
  putApiV1ApplicationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApplicationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApplicationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApplicationsSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApplicationsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })

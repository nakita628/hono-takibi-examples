import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LocationsIdRoute,
  getApiV1LocationsCreateRoute,
  getApiV1LocationsIdRoute,
  getApiV1LocationsRoute,
  postApiV1LocationsBulkRoute,
  postApiV1LocationsRoute,
  putApiV1LocationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })

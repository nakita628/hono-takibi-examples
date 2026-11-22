import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3ExclusionsBulkRoute,
  deleteApiV3ExclusionsIdRoute,
  getApiV3ExclusionsIdRoute,
  getApiV3ExclusionsPagedRoute,
  getApiV3ExclusionsRoute,
  postApiV3ExclusionsBulkRoute,
  postApiV3ExclusionsRoute,
  putApiV3ExclusionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListExclusionHandler = app
  .openapi(getApiV3ExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ExclusionsPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ExclusionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ExclusionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ExclusionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ExclusionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ExclusionsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3ImportlistexclusionBulkRoute,
  deleteApiV3ImportlistexclusionIdRoute,
  getApiV3ImportlistexclusionIdRoute,
  getApiV3ImportlistexclusionPagedRoute,
  getApiV3ImportlistexclusionRoute,
  postApiV3ImportlistexclusionRoute,
  putApiV3ImportlistexclusionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListExclusionHandler = app
  .openapi(getApiV3ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistexclusionPagedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ImportlistexclusionBulkRoute, (c) => {
    throw new Error('Not implemented')
  })

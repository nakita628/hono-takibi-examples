import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ImportlistexclusionIdRoute,
  getApiV1ImportlistexclusionIdRoute,
  getApiV1ImportlistexclusionRoute,
  postApiV1ImportlistexclusionRoute,
  putApiV1ImportlistexclusionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListExclusionHandler = app
  .openapi(getApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ImportlistexclusionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportlistexclusionRoute, (c) => {
    throw new Error('Not implemented')
  })

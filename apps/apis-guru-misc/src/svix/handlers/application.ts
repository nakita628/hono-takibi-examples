import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdIndexRoute,
  getApiV1AppAppIdIndexRoute,
  getApiV1AppIndexRoute,
  postApiV1AppIndexRoute,
  putApiV1AppAppIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApiV1AppIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

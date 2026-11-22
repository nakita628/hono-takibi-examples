import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AppAppIdRoute,
  getApiV1AppAppIdRoute,
  getApiV1AppRoute,
  patchApiV1AppAppIdRoute,
  postApiV1AppRoute,
  putApiV1AppAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(getApiV1AppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AppAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })

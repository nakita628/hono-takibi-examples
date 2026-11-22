import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1DelayprofileIdRoute,
  getApiV1DelayprofileIdRoute,
  getApiV1DelayprofileRoute,
  postApiV1DelayprofileRoute,
  putApiV1DelayprofileIdRoute,
  putApiV1DelayprofileReorderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const delayProfileHandler = app
  .openapi(postApiV1DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DelayprofileReorderIdRoute, (c) => {
    throw new Error('Not implemented')
  })

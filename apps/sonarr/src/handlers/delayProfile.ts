import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3DelayprofileIdRoute,
  getApiV3DelayprofileIdRoute,
  getApiV3DelayprofileRoute,
  postApiV3DelayprofileRoute,
  putApiV3DelayprofileIdRoute,
  putApiV3DelayprofileReorderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const delayProfileHandler = app
  .openapi(postApiV3DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DelayprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3DelayprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3DelayprofileReorderIdRoute, (c) => {
    throw new Error('Not implemented')
  })

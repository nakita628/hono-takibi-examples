import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ReleaseprofileIdRoute,
  getApiV1ReleaseprofileIdRoute,
  getApiV1ReleaseprofileRoute,
  postApiV1ReleaseprofileRoute,
  putApiV1ReleaseprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releaseProfileHandler = app
  .openapi(getApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })

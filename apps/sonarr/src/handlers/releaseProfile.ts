import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3ReleaseprofileIdRoute,
  getApiV3ReleaseprofileIdRoute,
  getApiV3ReleaseprofileRoute,
  postApiV3ReleaseprofileRoute,
  putApiV3ReleaseprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releaseProfileHandler = app
  .openapi(postApiV3ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

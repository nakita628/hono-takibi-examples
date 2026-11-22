import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1QualityprofileIdRoute,
  getApiV1QualityprofileIdRoute,
  getApiV1QualityprofileRoute,
  postApiV1QualityprofileRoute,
  putApiV1QualityprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qualityProfileHandler = app
  .openapi(postApiV1QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

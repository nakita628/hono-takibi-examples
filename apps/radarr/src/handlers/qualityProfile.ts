import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3QualityprofileIdRoute,
  getApiV3QualityprofileIdRoute,
  getApiV3QualityprofileRoute,
  postApiV3QualityprofileRoute,
  putApiV3QualityprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qualityProfileHandler = app
  .openapi(postApiV3QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualityprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3QualityprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute,
  getS3OutpostsListEndpointsRoute,
  getS3OutpostsListOutpostsWithS3Route,
  getS3OutpostsListSharedEndpointsOutpostIdRoute,
  postS3OutpostsCreateEndpointRoute,
} from '../routes'

const app = new OpenAPIHono()

export const S3OutpostsHandler = app
  .openapi(postS3OutpostsCreateEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteS3OutpostsDeleteEndpointEndpointIdOutpostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getS3OutpostsListEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getS3OutpostsListOutpostsWithS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getS3OutpostsListSharedEndpointsOutpostIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4UploadsUploadIdStatusRoute,
  postV4UploadsRoute,
  postV4UploadsStatusQueryRoute,
  putV4UploadsUploadIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postV4UploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UploadsStatusQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UploadsUploadIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

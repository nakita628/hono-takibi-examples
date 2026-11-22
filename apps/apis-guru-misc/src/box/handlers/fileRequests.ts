import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFileRequestsFileRequestIdRoute,
  getFileRequestsFileRequestIdRoute,
  postFileRequestsFileRequestIdCopyRoute,
  putFileRequestsFileRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileRequestsHandler = app
  .openapi(deleteFileRequestsFileRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileRequestsFileRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFileRequestsFileRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileRequestsFileRequestIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUploadsRoute,
  postUploadsUploadIdCancelRoute,
  postUploadsUploadIdCompleteRoute,
  postUploadsUploadIdPartsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsUploadIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsUploadIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsUploadIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })

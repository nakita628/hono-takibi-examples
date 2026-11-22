import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminUploadsIdRoute,
  getAdminUploadsIdRoute,
  postAdminUploadsPresignedUrlsRoute,
  postAdminUploadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postAdminUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUploadsPresignedUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

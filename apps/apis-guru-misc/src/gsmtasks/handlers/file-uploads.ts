import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFileUploadsIdIndexRoute,
  getFileUploadsIndexRoute,
  postFileUploadsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileUploadsHandler = app
  .openapi(getFileUploadsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileUploadsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileUploadsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

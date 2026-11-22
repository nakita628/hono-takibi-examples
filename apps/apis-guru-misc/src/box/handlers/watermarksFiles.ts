import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdWatermarkRoute,
  getFilesFileIdWatermarkRoute,
  putFilesFileIdWatermarkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const watermarksFilesHandler = app
  .openapi(deleteFilesFileIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFilesFileIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdWatermarkRoute, (c) => {
    throw new Error('Not implemented')
  })

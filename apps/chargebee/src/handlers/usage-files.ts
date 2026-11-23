import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsageFilesUsageFileIdProcessingStatusRoute,
  postUsageFilesUploadUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageFilesHandler = app
  .openapi(getUsageFilesUsageFileIdProcessingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsageFilesUploadUrlRoute, (c) => {
    throw new Error('Not implemented')
  })

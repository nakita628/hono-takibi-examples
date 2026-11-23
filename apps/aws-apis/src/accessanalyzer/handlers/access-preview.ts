import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccessPreviewAccessPreviewIdAnalyzerArnRoute,
  postAccessPreviewAccessPreviewIdRoute,
  putAccessPreviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessPreviewHandler = app
  .openapi(putAccessPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessPreviewAccessPreviewIdAnalyzerArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessPreviewAccessPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })

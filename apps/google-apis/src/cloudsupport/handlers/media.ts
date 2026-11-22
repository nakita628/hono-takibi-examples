import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2betaNameDownloadRoute, postV2betaParentAttachmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getV2betaNameDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2betaParentAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

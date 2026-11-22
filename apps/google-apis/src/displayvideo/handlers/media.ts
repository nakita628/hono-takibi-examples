import { OpenAPIHono } from '@hono/zod-openapi'
import { getDownloadResourceNameRoute, postMediaResourceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const mediaHandler = app
  .openapi(getDownloadResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })

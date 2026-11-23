import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyFpgaImageRoute, postActionCopyFpgaImageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCopyFpgaImageHandler = app
  .openapi(getActionCopyFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })

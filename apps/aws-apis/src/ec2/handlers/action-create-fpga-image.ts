import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateFpgaImageRoute, postActionCreateFpgaImageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateFpgaImageHandler = app
  .openapi(getActionCreateFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })

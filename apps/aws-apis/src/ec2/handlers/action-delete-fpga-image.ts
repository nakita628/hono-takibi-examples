import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteFpgaImageRoute, postActionDeleteFpgaImageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteFpgaImageHandler = app
  .openapi(getActionDeleteFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteFpgaImageRoute, (c) => {
    throw new Error('Not implemented')
  })

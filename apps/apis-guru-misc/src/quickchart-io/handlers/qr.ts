import { OpenAPIHono } from '@hono/zod-openapi'
import { getQrRoute, postQrRoute } from '../routes'

const app = new OpenAPIHono()

export const qrHandler = app
  .openapi(getQrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrRoute, (c) => {
    throw new Error('Not implemented')
  })

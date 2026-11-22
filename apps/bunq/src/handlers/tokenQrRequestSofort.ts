import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDTokenQrRequestSofortRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenQrRequestSofortHandler = app.openapi(
  postUserUserIDTokenQrRequestSofortRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

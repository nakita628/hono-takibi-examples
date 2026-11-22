import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDTokenQrRequestIdealRoute } from '../routes'

const app = new OpenAPIHono()

export const tokenQrRequestIdealHandler = app.openapi(
  postUserUserIDTokenQrRequestIdealRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

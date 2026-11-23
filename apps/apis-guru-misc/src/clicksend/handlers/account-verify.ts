import { OpenAPIHono } from '@hono/zod-openapi'
import { putAccountVerifySendRoute, putAccountVerifyVerifyActivationTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const accountVerifyHandler = app
  .openapi(putAccountVerifySendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountVerifyVerifyActivationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getVerifyRoute, postVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyHandler = app
  .openapi(getVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })

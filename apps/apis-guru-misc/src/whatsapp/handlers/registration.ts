import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountRoute, postAccountVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const registrationHandler = app
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })

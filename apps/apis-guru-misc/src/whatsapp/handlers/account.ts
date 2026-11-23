import { OpenAPIHono } from '@hono/zod-openapi'
import { postAccountRoute, postAccountShardsRoute, postAccountVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })

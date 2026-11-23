import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserauthLoginOptionsRoute, postUserauthRoute } from '../routes'

const app = new OpenAPIHono()

export const userauthHandler = app
  .openapi(postUserauthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserauthLoginOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

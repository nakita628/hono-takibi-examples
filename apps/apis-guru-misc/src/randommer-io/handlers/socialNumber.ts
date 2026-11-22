import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiSocialNumberRoute, postApiSocialNumberRoute } from '../routes'

const app = new OpenAPIHono()

export const socialNumberHandler = app
  .openapi(getApiSocialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSocialNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

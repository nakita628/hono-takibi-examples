import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1AppsVerifyCredentialsRoute, postApiV1AppsRoute } from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(postApiV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppsVerifyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1SelfUpdateCheckVersionRoute, postApiV1SelfUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateHandler = app
  .openapi(postApiV1SelfUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SelfUpdateCheckVersionRoute, (c) => {
    throw new Error('Not implemented')
  })

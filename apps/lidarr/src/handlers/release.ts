import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ReleaseRoute, postApiV1ReleaseRoute } from '../routes'

const app = new OpenAPIHono()

export const releaseHandler = app
  .openapi(postApiV1ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })

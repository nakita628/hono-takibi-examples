import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ReleaseRoute, postApiV3ReleaseRoute } from '../routes'

const app = new OpenAPIHono()

export const releaseHandler = app
  .openapi(postApiV3ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1MergesJobIdRoute, postV1MergesRoute } from '../routes'

const app = new OpenAPIHono()

export const mergeHandler = app
  .openapi(postV1MergesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1MergesJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2RequestQueuesRoute, postV2RequestQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const storageRequestQueuesHandler = app
  .openapi(getV2RequestQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2RequestQueuesRoute, (c) => {
    throw new Error('Not implemented')
  })

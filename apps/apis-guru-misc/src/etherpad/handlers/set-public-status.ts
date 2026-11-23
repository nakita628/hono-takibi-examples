import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetPublicStatusRoute, postSetPublicStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const setPublicStatusHandler = app
  .openapi(getSetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

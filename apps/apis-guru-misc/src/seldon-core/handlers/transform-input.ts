import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransformInputRoute, postTransformInputRoute } from '../routes'

const app = new OpenAPIHono()

export const transformInputHandler = app
  .openapi(getTransformInputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformInputRoute, (c) => {
    throw new Error('Not implemented')
  })

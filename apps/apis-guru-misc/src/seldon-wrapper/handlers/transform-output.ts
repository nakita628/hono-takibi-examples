import { OpenAPIHono } from '@hono/zod-openapi'
import { getTransformOutputRoute, postTransformOutputRoute } from '../routes'

const app = new OpenAPIHono()

export const transformOutputHandler = app
  .openapi(getTransformOutputRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransformOutputRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getPassportsIdRoute, postPassportsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const passportsHandler = app
  .openapi(getPassportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPassportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

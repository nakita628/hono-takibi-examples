import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetTokenRoute, postGetTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const getTokenHandler = app
  .openapi(getGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

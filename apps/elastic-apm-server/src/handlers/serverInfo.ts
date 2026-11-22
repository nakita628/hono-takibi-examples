import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, postRoute } from '../routes'

const app = new OpenAPIHono()

export const serverInfoHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoute, (c) => {
    throw new Error('Not implemented')
  })

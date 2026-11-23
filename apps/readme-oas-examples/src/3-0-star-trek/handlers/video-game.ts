import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideoGameRoute, getVideoGameSearchRoute, postVideoGameSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const videoGameHandler = app
  .openapi(getVideoGameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideoGameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideoGameSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postAreaRoute, postPathRoute, postPointsRoute } from '../routes'

const app = new OpenAPIHono()

export const createHandler = app
  .openapi(postAreaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPointsRoute, (c) => {
    throw new Error('Not implemented')
  })

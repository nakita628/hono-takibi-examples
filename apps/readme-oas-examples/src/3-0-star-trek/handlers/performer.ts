import { OpenAPIHono } from '@hono/zod-openapi'
import { getPerformerRoute, getPerformerSearchRoute, postPerformerSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const performerHandler = app
  .openapi(getPerformerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPerformerSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPerformerSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

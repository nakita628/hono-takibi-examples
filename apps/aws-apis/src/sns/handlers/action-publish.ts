import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPublishRoute, postActionPublishRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPublishHandler = app
  .openapi(getActionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPublishRoute, (c) => {
    throw new Error('Not implemented')
  })

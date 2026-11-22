import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPublishTypeRoute, postActionPublishTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPublishTypeHandler = app
  .openapi(getActionPublishTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPublishTypeRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicListsRoute, postPublicSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getPublicListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })

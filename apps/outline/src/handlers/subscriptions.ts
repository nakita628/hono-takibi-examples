import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSubscriptionsCreateRoute,
  postSubscriptionsDeleteRoute,
  postSubscriptionsInfoRoute,
  postSubscriptionsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postSubscriptionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postLifecycleManyToOneRoute, postLifecycleOneToOneRoute } from '../routes'

const app = new OpenAPIHono()

export const lifecycleHandler = app
  .openapi(postLifecycleManyToOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleOneToOneRoute, (c) => {
    throw new Error('Not implemented')
  })

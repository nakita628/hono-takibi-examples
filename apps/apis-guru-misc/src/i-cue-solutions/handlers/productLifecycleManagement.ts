import { OpenAPIHono } from '@hono/zod-openapi'
import { postLifecycleManyToOneRoute, postLifecycleOneToOneRoute } from '../routes'

const app = new OpenAPIHono()

export const productLifecycleManagementHandler = app
  .openapi(postLifecycleManyToOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleOneToOneRoute, (c) => {
    throw new Error('Not implemented')
  })

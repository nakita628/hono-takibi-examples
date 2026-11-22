import { OpenAPIHono } from '@hono/zod-openapi'
import { postChangeServerLifeCycleStateRoute } from '../routes'

const app = new OpenAPIHono()

export const ChangeServerLifeCycleStateHandler = app.openapi(
  postChangeServerLifeCycleStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

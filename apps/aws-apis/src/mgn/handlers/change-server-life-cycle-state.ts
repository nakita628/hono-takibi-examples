import { OpenAPIHono } from '@hono/zod-openapi'
import { postChangeServerLifeCycleStateRoute } from '../routes'

const app = new OpenAPIHono()

export const changeServerLifeCycleStateHandler = app.openapi(
  postChangeServerLifeCycleStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

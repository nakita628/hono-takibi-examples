import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1BehaviorRoute } from '../routes'

const app = new OpenAPIHono()

export const behaviorHandler = app.openapi(postV1BehaviorRoute, (c) => {
  throw new Error('Not implemented')
})

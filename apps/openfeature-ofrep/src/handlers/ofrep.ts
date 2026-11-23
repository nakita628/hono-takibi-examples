import { OpenAPIHono } from '@hono/zod-openapi'
import { postOfrepV1EvaluateFlagsKeyRoute, postOfrepV1EvaluateFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ofrepHandler = app
  .openapi(postOfrepV1EvaluateFlagsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOfrepV1EvaluateFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrderFeedbackRoute, postV1OrderScreenRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1OrderFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrderScreenRoute, (c) => {
    throw new Error('Not implemented')
  })

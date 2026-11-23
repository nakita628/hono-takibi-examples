import { OpenAPIHono } from '@hono/zod-openapi'
import { postLateOrderCompensationQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const lateOrderCompensationQueryHandler = app.openapi(
  postLateOrderCompensationQueryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

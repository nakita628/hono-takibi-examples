import { OpenAPIHono } from '@hono/zod-openapi'
import { postActionListDeadLetterSourceQueuesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListDeadLetterSourceQueuesHandler = app.openapi(
  postActionListDeadLetterSourceQueuesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

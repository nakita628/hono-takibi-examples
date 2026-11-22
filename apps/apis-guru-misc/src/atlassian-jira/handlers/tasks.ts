import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3TaskTaskIdRoute, postRestApi3TaskTaskIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const tasksHandler = app
  .openapi(getRestApi3TaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3TaskTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

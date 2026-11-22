import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3StatusIdOrNameRoute, getRestApi3StatusRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowStatusesHandler = app
  .openapi(getRestApi3StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatusIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })

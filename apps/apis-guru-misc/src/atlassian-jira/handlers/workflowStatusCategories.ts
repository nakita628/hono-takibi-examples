import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3StatuscategoryIdOrKeyRoute, getRestApi3StatuscategoryRoute } from '../routes'

const app = new OpenAPIHono()

export const workflowStatusCategoriesHandler = app
  .openapi(getRestApi3StatuscategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3StatuscategoryIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })

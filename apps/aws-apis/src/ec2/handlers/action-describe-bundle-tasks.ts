import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeBundleTasksRoute, postActionDescribeBundleTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeBundleTasksHandler = app
  .openapi(getActionDescribeBundleTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeBundleTasksRoute, (c) => {
    throw new Error('Not implemented')
  })

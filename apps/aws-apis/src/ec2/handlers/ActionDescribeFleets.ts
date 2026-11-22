import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeFleetsRoute, postActionDescribeFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeFleetsHandler = app
  .openapi(getActionDescribeFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFleetsRoute, (c) => {
    throw new Error('Not implemented')
  })

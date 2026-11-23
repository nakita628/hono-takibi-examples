import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeSuggestersRoute, postActionDescribeSuggestersRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSuggestersHandler = app
  .openapi(getActionDescribeSuggestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSuggestersRoute, (c) => {
    throw new Error('Not implemented')
  })

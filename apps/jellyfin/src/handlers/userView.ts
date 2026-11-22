import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserViewsGroupingOptionsRoute, getUserViewsRoute } from '../routes'

const app = new OpenAPIHono()

export const userViewHandler = app
  .openapi(getUserViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserViewsGroupingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

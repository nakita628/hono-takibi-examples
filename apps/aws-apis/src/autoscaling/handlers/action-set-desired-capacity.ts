import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetDesiredCapacityRoute, postActionSetDesiredCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const actionSetDesiredCapacityHandler = app
  .openapi(getActionSetDesiredCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetDesiredCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })

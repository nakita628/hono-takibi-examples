import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteStackSetRoute, postActionDeleteStackSetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteStackSetHandler = app
  .openapi(getActionDeleteStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })

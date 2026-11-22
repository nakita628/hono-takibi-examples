import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetGroupRoute, postActionGetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetGroupHandler = app
  .openapi(getActionGetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })

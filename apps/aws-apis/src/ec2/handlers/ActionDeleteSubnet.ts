import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSubnetRoute, postActionDeleteSubnetRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSubnetHandler = app
  .openapi(getActionDeleteSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSubnetRoute, (c) => {
    throw new Error('Not implemented')
  })

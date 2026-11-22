import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteVpcRoute, postActionDeleteVpcRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteVpcHandler = app
  .openapi(getActionDeleteVpcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteVpcRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDhcpOptionsRoute, postActionDeleteDhcpOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteDhcpOptionsHandler = app
  .openapi(getActionDeleteDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDhcpOptionsRoute, postActionCreateDhcpOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateDhcpOptionsHandler = app
  .openapi(getActionCreateDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDhcpOptionsRoute, postActionDescribeDhcpOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeDhcpOptionsHandler = app
  .openapi(getActionDescribeDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

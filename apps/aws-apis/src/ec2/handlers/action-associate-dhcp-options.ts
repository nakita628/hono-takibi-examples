import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssociateDhcpOptionsRoute, postActionAssociateDhcpOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAssociateDhcpOptionsHandler = app
  .openapi(getActionAssociateDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssociateDhcpOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyIpamRoute, postActionModifyIpamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionModifyIpamHandler = app
  .openapi(getActionModifyIpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyIpamRoute, (c) => {
    throw new Error('Not implemented')
  })

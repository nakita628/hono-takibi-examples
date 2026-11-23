import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateIpamRoute, postActionCreateIpamRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateIpamHandler = app
  .openapi(getActionCreateIpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateIpamRoute, (c) => {
    throw new Error('Not implemented')
  })

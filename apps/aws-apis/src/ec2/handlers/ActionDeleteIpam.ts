import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIpamRoute, postActionDeleteIpamRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIpamHandler = app
  .openapi(getActionDeleteIpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIpamRoute, (c) => {
    throw new Error('Not implemented')
  })

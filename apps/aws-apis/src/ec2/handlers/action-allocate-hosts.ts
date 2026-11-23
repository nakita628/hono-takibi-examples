import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAllocateHostsRoute, postActionAllocateHostsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAllocateHostsHandler = app
  .openapi(getActionAllocateHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAllocateHostsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsumerV1ServicegroupsIdRoute, getConsumerV1ServicegroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceGroupsHandler = app
  .openapi(getConsumerV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

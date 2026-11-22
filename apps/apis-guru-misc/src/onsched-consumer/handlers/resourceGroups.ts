import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsumerV1ResourcegroupsIdRoute, getConsumerV1ResourcegroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceGroupsHandler = app
  .openapi(getConsumerV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

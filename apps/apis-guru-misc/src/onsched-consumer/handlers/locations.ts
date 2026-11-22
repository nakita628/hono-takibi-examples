import { OpenAPIHono } from '@hono/zod-openapi'
import { getConsumerV1LocationsIdRoute, getConsumerV1LocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getConsumerV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

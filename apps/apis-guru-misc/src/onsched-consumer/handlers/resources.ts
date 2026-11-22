import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConsumerV1ResourcesIdRoute,
  getConsumerV1ResourcesIdServicesRoute,
  getConsumerV1ResourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getConsumerV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })

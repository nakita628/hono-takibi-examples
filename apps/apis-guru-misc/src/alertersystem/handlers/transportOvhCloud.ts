import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportOvhCloudIdRoute,
  getApiTransportOvhCloudIdRoute,
  getApiTransportOvhCloudRoute,
  postApiTransportOvhCloudRoute,
  putApiTransportOvhCloudIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportOvhCloudHandler = app
  .openapi(getApiTransportOvhCloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportOvhCloudRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportOvhCloudIdRoute, (c) => {
    throw new Error('Not implemented')
  })

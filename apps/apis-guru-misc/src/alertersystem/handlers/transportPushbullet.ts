import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportPushbulletIdRoute,
  getApiTransportPushbulletIdRoute,
  getApiTransportPushbulletRoute,
  postApiTransportPushbulletRoute,
  putApiTransportPushbulletIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportPushbulletHandler = app
  .openapi(getApiTransportPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportPushbulletIdRoute, (c) => {
    throw new Error('Not implemented')
  })

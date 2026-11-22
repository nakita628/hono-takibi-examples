import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportLineNotifyIdRoute,
  getApiTransportLineNotifyIdRoute,
  getApiTransportLineNotifyRoute,
  postApiTransportLineNotifyRoute,
  putApiTransportLineNotifyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportLineNotifyHandler = app
  .openapi(getApiTransportLineNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportLineNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportLineNotifyIdRoute, (c) => {
    throw new Error('Not implemented')
  })

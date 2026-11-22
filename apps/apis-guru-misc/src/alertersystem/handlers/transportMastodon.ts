import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportMastodonIdRoute,
  getApiTransportMastodonIdRoute,
  getApiTransportMastodonRoute,
  postApiTransportMastodonRoute,
  putApiTransportMastodonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportMastodonHandler = app
  .openapi(getApiTransportMastodonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportMastodonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportMastodonIdRoute, (c) => {
    throw new Error('Not implemented')
  })

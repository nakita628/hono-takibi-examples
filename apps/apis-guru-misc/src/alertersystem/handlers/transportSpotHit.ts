import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSpotHitIdRoute,
  getApiTransportSpotHitIdRoute,
  getApiTransportSpotHitRoute,
  postApiTransportSpotHitRoute,
  putApiTransportSpotHitIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSpotHitHandler = app
  .openapi(getApiTransportSpotHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSpotHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSpotHitIdRoute, (c) => {
    throw new Error('Not implemented')
  })

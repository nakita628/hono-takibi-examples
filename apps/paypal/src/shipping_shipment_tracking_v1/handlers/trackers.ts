import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ShippingTrackersIdRoute,
  getV1ShippingTrackersRoute,
  postV1ShippingTrackersRoute,
  putV1ShippingTrackersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackersHandler = app
  .openapi(postV1ShippingTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShippingTrackersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ShippingTrackersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShippingTrackersIdRoute, (c) => {
    throw new Error('Not implemented')
  })

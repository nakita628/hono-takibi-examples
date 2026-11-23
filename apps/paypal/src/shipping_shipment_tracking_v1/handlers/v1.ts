import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ShippingTrackersIdRoute,
  getV1ShippingTrackersRoute,
  postV1ShippingTrackersBatchRoute,
  postV1ShippingTrackersRoute,
  putV1ShippingTrackersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1ShippingTrackersBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
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

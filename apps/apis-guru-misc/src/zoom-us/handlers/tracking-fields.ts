import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTrackingFieldsFieldIdRoute,
  getTrackingFieldsFieldIdRoute,
  getTrackingFieldsRoute,
  patchTrackingFieldsFieldIdRoute,
  postTrackingFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackingFieldsHandler = app
  .openapi(getTrackingFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackingFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTrackingFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackingFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackingFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })

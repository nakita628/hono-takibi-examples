import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePinsPinIdRoute,
  getPinsAnalyticsRoute,
  getPinsPinIdAnalyticsRoute,
  getPinsPinIdProductTagsRoute,
  getPinsPinIdRoute,
  getPinsRoute,
  patchPinsPinIdRoute,
  postPinsPinIdProductTagsBulkDeleteRoute,
  postPinsPinIdProductTagsRoute,
  postPinsPinIdSaveRoute,
  postPinsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pinsHandler = app
  .openapi(postPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsPinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPinsPinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePinsPinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsPinIdAnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsPinIdProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsPinIdProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsPinIdProductTagsBulkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsPinIdSaveRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDelayDelayRoute,
  getBase64ValueRoute,
  getBytesNRoute,
  getDelayDelayRoute,
  getDripRoute,
  getLinksNOffsetRoute,
  getRangeNumbytesRoute,
  getStreamBytesNRoute,
  getStreamNRoute,
  getUuidRoute,
  patchDelayDelayRoute,
  postDelayDelayRoute,
  putDelayDelayRoute,
  traceDelayDelayRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicDataHandler = app
  .openapi(getBase64ValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBytesNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(traceDelayDelayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDripRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLinksNOffsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRangeNumbytesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamBytesNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamNRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

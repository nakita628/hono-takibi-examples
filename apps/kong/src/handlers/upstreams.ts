import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUpstreamsUpstreamIdOrNameRoute,
  getUpstreamsRoute,
  getUpstreamsUpstreamIdOrNameRoute,
  patchUpstreamsUpstreamIdOrNameRoute,
  postUpstreamsRoute,
  putUpstreamsUpstreamIdOrNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const upstreamsHandler = app
  .openapi(getUpstreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpstreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUpstreamsUpstreamIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUpstreamsUpstreamIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUpstreamsUpstreamIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUpstreamsUpstreamIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })

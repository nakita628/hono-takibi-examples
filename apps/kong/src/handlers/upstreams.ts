import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUpstreamsUpstreamIdOrNameRoute,
  deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  getUpstreamsRoute,
  getUpstreamsUpstreamIdOrNameRoute,
  getUpstreamsUpstreamIdOrNameTargetsRoute,
  getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  patchUpstreamsUpstreamIdOrNameRoute,
  patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  postUpstreamsRoute,
  postUpstreamsUpstreamIdOrNameTargetsRoute,
  putUpstreamsUpstreamIdOrNameRoute,
  putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
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
  .openapi(getUpstreamsUpstreamIdOrNameTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpstreamsUpstreamIdOrNameTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute, (c) => {
    throw new Error('Not implemented')
  })

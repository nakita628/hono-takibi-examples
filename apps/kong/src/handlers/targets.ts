import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  getUpstreamsUpstreamIdOrNameTargetsRoute,
  getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
  postUpstreamsUpstreamIdOrNameTargetsRoute,
  putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetsHandler = app
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

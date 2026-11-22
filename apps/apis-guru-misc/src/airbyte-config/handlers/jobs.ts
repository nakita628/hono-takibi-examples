import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1JobsCancelRoute,
  postV1JobsGetDebugInfoRoute,
  postV1JobsGetLastReplicationJobRoute,
  postV1JobsGetLightRoute,
  postV1JobsGetNormalizationStatusRoute,
  postV1JobsGetRoute,
  postV1JobsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const jobsHandler = app
  .openapi(postV1JobsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetDebugInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLastReplicationJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsGetNormalizationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1JobsListRoute, (c) => {
    throw new Error('Not implemented')
  })

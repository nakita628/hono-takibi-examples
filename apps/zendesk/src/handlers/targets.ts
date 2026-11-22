import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TargetsTargetIdRoute,
  getApiV2TargetsRoute,
  getApiV2TargetsTargetIdRoute,
  postApiV2TargetsRoute,
  putApiV2TargetsTargetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const targetsHandler = app
  .openapi(getApiV2TargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TargetsTargetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1PoolsDefaultRoute,
  postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute,
  postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute,
  postApiV1GenevaActionsPoolsTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolsHandler = app
  .openapi(postApiV1GenevaActionsPoolsChangeResourceDeletionSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPoolsPoolCodeRotatePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GenevaActionsPoolsTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PoolsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })

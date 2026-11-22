import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTargetsTargetIdAssetsIdIndexRoute,
  getTargetsTargetIdAssetsIdIndexRoute,
  getTargetsTargetIdAssetsIndexRoute,
  patchTargetsTargetIdAssetsIdIndexRoute,
  postTargetsTargetIdAssetsIdVerifyIndexRoute,
  postTargetsTargetIdAssetsIndexRoute,
  putTargetsTargetIdAssetsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getTargetsTargetIdAssetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdAssetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTargetsTargetIdAssetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTargetsTargetIdAssetsIdVerifyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

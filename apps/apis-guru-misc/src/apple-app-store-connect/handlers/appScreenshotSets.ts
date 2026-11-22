import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppScreenshotSetsIdRoute,
  getV1AppScreenshotSetsIdAppScreenshotsRoute,
  getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
  getV1AppScreenshotSetsIdRoute,
  patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute,
  postV1AppScreenshotSetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appScreenshotSetsHandler = app
  .openapi(postV1AppScreenshotSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppScreenshotSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppScreenshotSetsIdRelationshipsAppScreenshotsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ReleasesReleaseIdBundleBundleIdRoute,
  getApiV2ReleasesReleaseIdRoute,
  getApiV2ReleasesRoute,
  postApiV2ReleasesReleaseIdBundleBundleIdRoute,
  postApiV2ReleasesRoute,
  putApiV2ReleasesReleaseId2Route,
} from '../routes'

const app = new OpenAPIHono()

export const releaseHandler = app
  .openapi(getApiV2ReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ReleasesReleaseIdBundleBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ReleasesReleaseIdBundleBundleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ReleasesReleaseId2Route, (c) => {
    throw new Error('Not implemented')
  })

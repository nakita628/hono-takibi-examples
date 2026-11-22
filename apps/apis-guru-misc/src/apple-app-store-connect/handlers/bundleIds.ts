import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BundleIdsIdRoute,
  getV1BundleIdsIdAppRoute,
  getV1BundleIdsIdBundleIdCapabilitiesRoute,
  getV1BundleIdsIdProfilesRoute,
  getV1BundleIdsIdRoute,
  getV1BundleIdsRoute,
  patchV1BundleIdsIdRoute,
  postV1BundleIdsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundleIdsHandler = app
  .openapi(getV1BundleIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BundleIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BundleIdsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdBundleIdCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleIdsIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })

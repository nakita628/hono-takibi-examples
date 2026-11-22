import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BundleIdCapabilitiesIdRoute,
  patchV1BundleIdCapabilitiesIdRoute,
  postV1BundleIdCapabilitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bundleIdCapabilitiesHandler = app
  .openapi(postV1BundleIdCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleIdCapabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BundleIdCapabilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

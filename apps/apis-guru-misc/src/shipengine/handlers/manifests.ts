import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ManifestsManifestIdRoute,
  getV1ManifestsRequestsManifestRequestIdRoute,
  getV1ManifestsRoute,
  postV1ManifestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manifestsHandler = app
  .openapi(getV1ManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManifestsRequestsManifestRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ManifestsManifestIdRoute, (c) => {
    throw new Error('Not implemented')
  })

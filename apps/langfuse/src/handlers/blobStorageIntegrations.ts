import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicIntegrationsBlobStorageIdRoute,
  getApiPublicIntegrationsBlobStorageIdRoute,
  getApiPublicIntegrationsBlobStorageRoute,
  putApiPublicIntegrationsBlobStorageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blobStorageIntegrationsHandler = app
  .openapi(getApiPublicIntegrationsBlobStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicIntegrationsBlobStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicIntegrationsBlobStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicIntegrationsBlobStorageIdRoute, (c) => {
    throw new Error('Not implemented')
  })

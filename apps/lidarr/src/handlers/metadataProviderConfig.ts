import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigMetadataproviderIdRoute,
  getApiV1ConfigMetadataproviderRoute,
  putApiV1ConfigMetadataproviderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataProviderConfigHandler = app
  .openapi(getApiV1ConfigMetadataproviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigMetadataproviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigMetadataproviderRoute, (c) => {
    throw new Error('Not implemented')
  })

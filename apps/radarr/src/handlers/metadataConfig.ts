import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigMetadataIdRoute,
  getApiV3ConfigMetadataRoute,
  putApiV3ConfigMetadataIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataConfigHandler = app
  .openapi(getApiV3ConfigMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigMetadataIdRoute, (c) => {
    throw new Error('Not implemented')
  })

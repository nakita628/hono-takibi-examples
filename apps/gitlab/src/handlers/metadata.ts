import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4MetadataRoute, getApiV4VersionRoute } from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getApiV4MetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })

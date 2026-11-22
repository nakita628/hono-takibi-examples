import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ClientsClientIDCachedFilesRoute, getApiV2UpdateSystemRoute } from '../routes'

const app = new OpenAPIHono()

export const updateSystemHandler = app
  .openapi(getApiV2ClientsClientIDCachedFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UpdateSystemRoute, (c) => {
    throw new Error('Not implemented')
  })

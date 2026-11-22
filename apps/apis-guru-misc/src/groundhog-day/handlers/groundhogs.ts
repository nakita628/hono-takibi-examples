import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1GroundhogsRoute, getApiV1GroundhogsSlugRoute } from '../routes'

const app = new OpenAPIHono()

export const groundhogsHandler = app
  .openapi(getApiV1GroundhogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroundhogsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })

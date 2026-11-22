import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LocationsLocationRoute, getApiV1LocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getApiV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LocationsLocationRoute, (c) => {
    throw new Error('Not implemented')
  })

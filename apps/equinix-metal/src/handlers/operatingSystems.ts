import { OpenAPIHono } from '@hono/zod-openapi'
import { getOperatingSystemsRoute, getOperatingSystemVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const operatingSystemsHandler = app
  .openapi(getOperatingSystemVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOperatingSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })

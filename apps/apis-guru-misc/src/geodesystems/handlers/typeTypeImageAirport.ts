import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeTypeImageAirportRoute } from '../routes'

const app = new OpenAPIHono()

export const typeTypeImageAirportHandler = app.openapi(
  getRepositorySearchTypeTypeImageAirportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

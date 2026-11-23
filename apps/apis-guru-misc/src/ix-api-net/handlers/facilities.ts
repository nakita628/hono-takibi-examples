import { OpenAPIHono } from '@hono/zod-openapi'
import { getFacilitiesIdRoute, getFacilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const facilitiesHandler = app
  .openapi(getFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFacilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

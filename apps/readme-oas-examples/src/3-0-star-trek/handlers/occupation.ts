import { OpenAPIHono } from '@hono/zod-openapi'
import { getOccupationRoute, getOccupationSearchRoute, postOccupationSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const occupationHandler = app
  .openapi(getOccupationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOccupationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOccupationSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

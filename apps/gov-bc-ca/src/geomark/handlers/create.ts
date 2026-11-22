import { OpenAPIHono } from '@hono/zod-openapi'
import { postGeomarksCopyRoute, postGeomarksNewRoute } from '../routes'

const app = new OpenAPIHono()

export const createHandler = app
  .openapi(postGeomarksCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeomarksNewRoute, (c) => {
    throw new Error('Not implemented')
  })

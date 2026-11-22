import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3OutletsLocationLatitudeLongitudeRoute, getV3OutletsRoute } from '../routes'

const app = new OpenAPIHono()

export const outletsHandler = app
  .openapi(getV3OutletsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3OutletsLocationLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })

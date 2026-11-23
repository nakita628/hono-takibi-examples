import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPointsLatitudeLongitudeRadioRoute,
  getPointsLatitudeLongitudeRoute,
  getPointsLatitudeLongitudeStationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pointsHandler = app
  .openapi(getPointsLatitudeLongitudeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPointsLatitudeLongitudeRadioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPointsLatitudeLongitudeStationsRoute, (c) => {
    throw new Error('Not implemented')
  })

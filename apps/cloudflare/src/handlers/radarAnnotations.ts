import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAnnotationsIdRoute,
  getRadarAnnotationsOutagesLocationsRoute,
  getRadarAnnotationsOutagesRoute,
  getRadarAnnotationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarAnnotationsHandler = app
  .openapi(getRadarAnnotationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAnnotationsOutagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAnnotationsOutagesLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAnnotationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

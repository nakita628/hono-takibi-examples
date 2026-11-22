import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LocationsLocationIdRoute,
  getV2LocationsRoute,
  postV2LocationsRoute,
  putV2LocationsLocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2LocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGeofencesIdRoute,
  getGeofencesRoute,
  postGeofencesRoute,
  putGeofencesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const geofencesHandler = app
  .openapi(getGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGeofencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGeofencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGeofencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEphemerisEphemerisIdRoute,
  getEphemerisEphemerisIdRoute,
  postEphemerisRoute,
  putEphemerisEphemerisIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ephemerisHandler = app
  .openapi(postEphemerisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEphemerisEphemerisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEphemerisEphemerisIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEphemerisEphemerisIdRoute, (c) => {
    throw new Error('Not implemented')
  })

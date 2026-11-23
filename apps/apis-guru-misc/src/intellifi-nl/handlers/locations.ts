import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationsIdRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  postLocationsRoute,
  putLocationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(getLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

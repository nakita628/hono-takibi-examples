import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTimeLocationsIdIndexRoute,
  getTimeLocationsIndexRoute,
  postTimeLocationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeLocationsHandler = app
  .openapi(getTimeLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimeLocationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeLocationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

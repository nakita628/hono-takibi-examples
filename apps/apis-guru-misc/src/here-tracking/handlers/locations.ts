import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationsV4LocationIdRoute,
  deleteLocationsV4Route,
  getLocationsV4HealthRoute,
  getLocationsV4LocationIdRoute,
  getLocationsV4Route,
  getLocationsV4VersionRoute,
  postLocationsV4Route,
  putLocationsV4LocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(deleteLocationsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationsV4LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsV4LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocationsV4LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

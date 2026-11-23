import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLocationsIdRoute,
  getLocationsByEntityKindNamespaceNameRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  postLocationsByQueryRoute,
  postLocationsRoute,
  putLocationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(postLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLocationsByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLocationsByEntityKindNamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })

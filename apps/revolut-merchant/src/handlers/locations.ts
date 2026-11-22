import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLocationsLocationIdRoute,
  getApiLocationsLocationIdRoute,
  getApiLocationsRoute,
  patchApiLocationsLocationIdRoute,
  postApiLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(postApiLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

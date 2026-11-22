import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1LocationIdRoute,
  getV1LocationIdRoute,
  getV1LocationsRoute,
  patchV1LocationIdRoute,
  postV1LocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(deleteV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1LocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })

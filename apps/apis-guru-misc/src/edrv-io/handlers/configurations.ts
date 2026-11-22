import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ConfigurationsIdRoute,
  getV1ConfigurationsRoute,
  postV1ConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationsHandler = app
  .openapi(getV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

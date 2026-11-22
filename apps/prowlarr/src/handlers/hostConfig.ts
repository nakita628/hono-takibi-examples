import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigHostIdRoute,
  getApiV1ConfigHostRoute,
  putApiV1ConfigHostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostConfigHandler = app
  .openapi(getApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigHostRoute, (c) => {
    throw new Error('Not implemented')
  })

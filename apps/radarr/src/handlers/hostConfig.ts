import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigHostIdRoute,
  getApiV3ConfigHostRoute,
  putApiV3ConfigHostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostConfigHandler = app
  .openapi(getApiV3ConfigHostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigHostIdRoute, (c) => {
    throw new Error('Not implemented')
  })

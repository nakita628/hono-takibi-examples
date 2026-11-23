import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOtaUpdatesOtaUpdateIdRoute,
  getOtaUpdatesOtaUpdateIdRoute,
  getOtaUpdatesRoute,
  postOtaUpdatesOtaUpdateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otaUpdatesHandler = app
  .openapi(postOtaUpdatesOtaUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOtaUpdatesOtaUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOtaUpdatesOtaUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOtaUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ServerBlocklistServersHostRoute,
  getApiV1ServerBlocklistServersRoute,
  postApiV1ServerBlocklistServersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverBlocksHandler = app
  .openapi(getApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerBlocklistServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ServerBlocklistServersHostRoute, (c) => {
    throw new Error('Not implemented')
  })

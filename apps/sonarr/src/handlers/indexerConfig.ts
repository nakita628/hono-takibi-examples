import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigIndexerIdRoute,
  getApiV3ConfigIndexerRoute,
  putApiV3ConfigIndexerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerConfigHandler = app
  .openapi(getApiV3ConfigIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })

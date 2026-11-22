import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ConfigIndexerIdRoute,
  getApiV1ConfigIndexerRoute,
  putApiV1ConfigIndexerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexerConfigHandler = app
  .openapi(getApiV1ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ConfigIndexerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigIndexerRoute, (c) => {
    throw new Error('Not implemented')
  })

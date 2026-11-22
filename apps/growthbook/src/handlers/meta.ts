import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ConfirmationsIdRoute, getV1ConfirmationsRoute, getV1VersionRoute } from '../routes'

const app = new OpenAPIHono()

export const metaHandler = app
  .openapi(getV1VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfirmationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfirmationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

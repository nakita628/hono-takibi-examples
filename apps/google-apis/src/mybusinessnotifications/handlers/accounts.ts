import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, patchV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })

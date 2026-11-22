import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameLroRoute, getV1NameRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLroRoute, (c) => {
    throw new Error('Not implemented')
  })

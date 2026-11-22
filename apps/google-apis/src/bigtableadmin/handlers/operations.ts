import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2NameOperationsRoute, postV2NameCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

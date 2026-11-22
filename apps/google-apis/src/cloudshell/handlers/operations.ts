import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1NameRoute, postV1NameCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const operationsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })

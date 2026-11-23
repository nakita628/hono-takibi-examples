import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllowlistIdentifiersIdentifierIdRoute,
  getAllowlistIdentifiersRoute,
  postAllowlistIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowlistIdentifiersHandler = app
  .openapi(getAllowlistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllowlistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAllowlistIdentifiersIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlocklistIdentifiersIdentifierIdRoute,
  getBlocklistIdentifiersRoute,
  postBlocklistIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocklistIdentifiersHandler = app
  .openapi(getBlocklistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlocklistIdentifiersIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })

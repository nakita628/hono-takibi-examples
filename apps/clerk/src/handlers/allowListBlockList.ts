import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllowlistIdentifiersIdentifierIdRoute,
  deleteBlocklistIdentifiersIdentifierIdRoute,
  getAllowlistIdentifiersRoute,
  getBlocklistIdentifiersRoute,
  postAllowlistIdentifiersRoute,
  postBlocklistIdentifiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowListBlockListHandler = app
  .openapi(getAllowlistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAllowlistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAllowlistIdentifiersIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistIdentifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlocklistIdentifiersIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })

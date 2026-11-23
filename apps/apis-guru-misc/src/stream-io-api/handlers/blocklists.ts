import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlocklistsNameRoute,
  getBlocklistsNameRoute,
  getBlocklistsRoute,
  postBlocklistsRoute,
  putBlocklistsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocklistsHandler = app
  .openapi(getBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBlocklistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBlocklistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })

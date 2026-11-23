import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAllowListsIdRoute,
  getAllowListsIdRoute,
  getAllowListsRoute,
  postAllowListsRoute,
  putAllowListsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const allowListsHandler = app
  .openapi(postAllowListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllowListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAllowListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

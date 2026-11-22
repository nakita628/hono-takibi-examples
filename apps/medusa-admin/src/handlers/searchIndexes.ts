import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminSearchIndexesIdRoute,
  getAdminSearchIndexesRoute,
  postAdminSearchIndexesIdReindexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchIndexesHandler = app
  .openapi(getAdminSearchIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSearchIndexesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSearchIndexesIdReindexRoute, (c) => {
    throw new Error('Not implemented')
  })

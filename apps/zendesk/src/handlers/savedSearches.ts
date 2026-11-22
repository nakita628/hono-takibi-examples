import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SavedSearchesIdRoute,
  getApiV2SavedSearchesRoute,
  postApiV2SavedSearchesRoute,
  putApiV2SavedSearchesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const savedSearchesHandler = app
  .openapi(getApiV2SavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SavedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SavedSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SavedSearchesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

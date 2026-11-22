import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPinnedSearchesIdJsonRoute,
  getApiPinnedSearchesIdJsonRoute,
  getApiPinnedSearchesJsonRoute,
  patchApiPinnedSearchesIdJsonRoute,
  postApiPinnedSearchesJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pinnedSearchesHandler = app
  .openapi(postApiPinnedSearchesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPinnedSearchesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPinnedSearchesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

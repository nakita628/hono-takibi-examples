import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchArticlesQueryQueryRoute,
  getSearchListsQueryQueryRoute,
  getSearchPublicationsQueryQueryRoute,
  getSearchTagsQueryQueryRoute,
  getSearchUsersQueryQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchArticlesQueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchListsQueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPublicationsQueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchTagsQueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchUsersQueryQueryRoute, (c) => {
    throw new Error('Not implemented')
  })

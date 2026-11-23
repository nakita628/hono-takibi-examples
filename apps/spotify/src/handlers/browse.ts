import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrowseCategoriesCategoryIdPlaylistsRoute,
  getBrowseCategoriesCategoryIdRoute,
  getBrowseCategoriesRoute,
  getBrowseFeaturedPlaylistsRoute,
  getBrowseNewReleasesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const browseHandler = app
  .openapi(getBrowseFeaturedPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseCategoriesCategoryIdPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBrowseNewReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })

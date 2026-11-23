import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesCategoryEpisodesRoute,
  getCategoriesCategoryHighlightsRoute,
  getCategoriesCategoryProgrammesRoute,
  getCategoriesCategoryRoute,
  getCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryEpisodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryHighlightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesCategoryProgrammesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRelatedSearchesRoute,
  getSearchRoute,
  getSpellcheckRoute,
  getTrendingSearchesRoute,
  getTypeaheadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchAPIHandler = app
  .openapi(getRelatedSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpellcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrendingSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTypeaheadRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEntriesSourceLangWordIdFiltersRoute,
  getEntriesSourceLangWordIdRegionsRegionRoute,
  getEntriesSourceLangWordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dictionaryEntriesHandler = app
  .openapi(getEntriesSourceLangWordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdRegionsRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntriesSourceLangWordIdFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })

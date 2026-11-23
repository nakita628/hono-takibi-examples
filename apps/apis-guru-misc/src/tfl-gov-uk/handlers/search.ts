import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchBusSchedulesRoute,
  getSearchMetaCategoriesRoute,
  getSearchMetaSearchProvidersRoute,
  getSearchMetaSortsRoute,
  getSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchBusSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMetaCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMetaSearchProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchMetaSortsRoute, (c) => {
    throw new Error('Not implemented')
  })

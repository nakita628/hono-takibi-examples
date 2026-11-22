import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSitesSiteIdGetByPathPathPathItemsRoute,
  getSitesSiteIdItemsBaseItemIdRoute,
  getSitesSiteIdItemsCountRoute,
  getSitesSiteIdItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesBaseItemHandler = app
  .openapi(getSitesSiteIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdItemsBaseItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdItemsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSitesSiteIdGetByPathPathPathItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

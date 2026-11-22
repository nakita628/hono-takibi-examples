import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingListsIdContactsRoute,
  deleteMarketingListsIdRoute,
  getMarketingListsIdContactsCountRoute,
  getMarketingListsIdRoute,
  getMarketingListsRoute,
  patchMarketingListsIdRoute,
  postMarketingListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listsHandler = app
  .openapi(getMarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingListsIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingListsIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })

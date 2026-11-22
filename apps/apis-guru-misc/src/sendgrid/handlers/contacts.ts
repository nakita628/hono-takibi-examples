import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingContactsRoute,
  getMarketingContactsCountRoute,
  getMarketingContactsExportsIdRoute,
  getMarketingContactsExportsRoute,
  getMarketingContactsIdRoute,
  getMarketingContactsImportsIdRoute,
  getMarketingContactsRoute,
  postMarketingContactsBatchRoute,
  postMarketingContactsExportsRoute,
  postMarketingContactsSearchEmailsRoute,
  postMarketingContactsSearchRoute,
  putMarketingContactsImportsRoute,
  putMarketingContactsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(deleteMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingContactsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsSearchEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

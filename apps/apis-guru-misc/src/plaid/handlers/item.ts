import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postItemAccessTokenInvalidateRoute,
  postItemActivityListRoute,
  postItemApplicationListRoute,
  postItemApplicationScopesUpdateRoute,
  postItemGetRoute,
  postItemImportRoute,
  postItemPublicTokenCreateRoute,
  postItemPublicTokenExchangeRoute,
  postItemRemoveRoute,
  postItemWebhookUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemHandler = app
  .openapi(postItemAccessTokenInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemActivityListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemApplicationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemApplicationScopesUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPublicTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemPublicTokenExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemWebhookUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })

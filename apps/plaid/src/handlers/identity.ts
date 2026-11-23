import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdentityDocumentsUploadsGetRoute,
  postIdentityGetRoute,
  postIdentityMatchListRoute,
  postIdentityMatchRoute,
  postIdentityRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(postIdentityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityDocumentsUploadsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMatchListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRedirectUrlsIdRoute,
  getRedirectUrlsIdRoute,
  getRedirectUrlsRoute,
  postRedirectUrlsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const redirectURLsHandler = app
  .openapi(getRedirectUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRedirectUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRedirectUrlsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRedirectUrlsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

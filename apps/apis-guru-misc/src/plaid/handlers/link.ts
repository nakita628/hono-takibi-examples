import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postLinkOauthCorrelationIdExchangeRoute,
  postLinkTokenCreateRoute,
  postLinkTokenGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkHandler = app
  .openapi(postLinkOauthCorrelationIdExchangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLinkTokenGetRoute, (c) => {
    throw new Error('Not implemented')
  })

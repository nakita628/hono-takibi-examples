import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1RssAllbillsRssRoute,
  getApiV1RssBillsIdRssRoute,
  getApiV1RssPrivatebillsRssRoute,
  getApiV1RssPublicbillsRssRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rssHandler = app
  .openapi(getApiV1RssBillsIdRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssAllbillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssPrivatebillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RssPublicbillsRssRoute, (c) => {
    throw new Error('Not implemented')
  })

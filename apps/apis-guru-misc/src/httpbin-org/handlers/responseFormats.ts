import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBrotliRoute,
  getDeflateRoute,
  getDenyRoute,
  getEncodingUtf8Route,
  getGzipRoute,
  getHtmlRoute,
  getJsonRoute,
  getRobotsTxtRoute,
  getXmlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const responseFormatsHandler = app
  .openapi(getBrotliRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeflateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEncodingUtf8Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGzipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRobotsTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getXmlRoute, (c) => {
    throw new Error('Not implemented')
  })

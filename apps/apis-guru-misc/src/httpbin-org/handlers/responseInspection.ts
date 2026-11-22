import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCacheRoute,
  getCacheValueRoute,
  getEtagEtagRoute,
  getResponseHeadersRoute,
  postResponseHeadersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const responseInspectionHandler = app
  .openapi(getCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCacheValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtagEtagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResponseHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResponseHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })

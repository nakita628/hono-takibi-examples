import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingHeadersRoute,
  getAnythingHeadersSimpleRoute,
  postAnythingHeadersSimpleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const headerHandler = app
  .openapi(getAnythingHeadersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingHeadersSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnythingHeadersSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })

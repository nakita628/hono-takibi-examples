import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAnythingBooleansRoute,
  getAnythingJsonschemaFormatsRoute,
  getAnythingNumbersRoute,
  getAnythingOasFormatsRoute,
  getAnythingStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app
  .openapi(getAnythingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingJsonschemaFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingOasFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnythingBooleansRoute, (c) => {
    throw new Error('Not implemented')
  })

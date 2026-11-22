import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postLookupCnamRoute,
  postLookupFormatRoute,
  postLookupHlrRoute,
  postLookupMnpRoute,
  postLookupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lookupHandler = app
  .openapi(postLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupCnamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupFormatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupHlrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLookupMnpRoute, (c) => {
    throw new Error('Not implemented')
  })

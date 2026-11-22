import { OpenAPIHono } from '@hono/zod-openapi'
import { getBinListDownloadRoute, getBinLookupRoute, getConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const eCommerceHandler = app
  .openapi(getBinListDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBinLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConvertRoute, (c) => {
    throw new Error('Not implemented')
  })

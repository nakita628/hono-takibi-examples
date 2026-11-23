import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalwinescoresIndexRoute, getGlobalwinescoresLatestIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const globalwinescoresHandler = app
  .openapi(getGlobalwinescoresIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGlobalwinescoresLatestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

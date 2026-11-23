import { OpenAPIHono } from '@hono/zod-openapi'
import { getBinQuerybuilderJsonRoute, postBinQuerybuilderJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const binHandler = app
  .openapi(getBinQuerybuilderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBinQuerybuilderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

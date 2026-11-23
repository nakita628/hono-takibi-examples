import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdApiRoute, getIdDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const idHandler = app
  .openapi(getIdApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })

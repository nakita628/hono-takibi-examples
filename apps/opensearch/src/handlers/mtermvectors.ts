import { OpenAPIHono } from '@hono/zod-openapi'
import { getMtermvectorsRoute, postMtermvectorsRoute } from '../routes'

const app = new OpenAPIHono()

export const mtermvectorsHandler = app
  .openapi(getMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })

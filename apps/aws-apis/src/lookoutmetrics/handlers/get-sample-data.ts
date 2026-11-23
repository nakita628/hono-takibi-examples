import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetSampleDataRoute } from '../routes'

const app = new OpenAPIHono()

export const getSampleDataHandler = app.openapi(postGetSampleDataRoute, (c) => {
  throw new Error('Not implemented')
})

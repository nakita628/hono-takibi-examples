import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1beta1EntriesLookupRoute } from '../routes'

const app = new OpenAPIHono()

export const entriesHandler = app.openapi(getV1beta1EntriesLookupRoute, (c) => {
  throw new Error('Not implemented')
})

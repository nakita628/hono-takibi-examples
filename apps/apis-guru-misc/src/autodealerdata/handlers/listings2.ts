import { OpenAPIHono } from '@hono/zod-openapi'
import { getListings2Route } from '../routes'

const app = new OpenAPIHono()

export const listings2Handler = app.openapi(getListings2Route, (c) => {
  throw new Error('Not implemented')
})

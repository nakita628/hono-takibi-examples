import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2Route } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(getV2Route, (c) => {
  throw new Error('Not implemented')
})

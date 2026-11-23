import { OpenAPIHono } from '@hono/zod-openapi'
import { getMinmaxindexRoute } from '../routes'

const app = new OpenAPIHono()

export const minmaxindexHandler = app.openapi(getMinmaxindexRoute, (c) => {
  throw new Error('Not implemented')
})

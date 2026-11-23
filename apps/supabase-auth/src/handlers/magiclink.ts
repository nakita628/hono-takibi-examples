import { OpenAPIHono } from '@hono/zod-openapi'
import { postMagiclinkRoute } from '../routes'

const app = new OpenAPIHono()

export const magiclinkHandler = app.openapi(postMagiclinkRoute, (c) => {
  throw new Error('Not implemented')
})

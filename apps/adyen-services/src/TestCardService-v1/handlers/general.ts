import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateTestCardRangesRoute } from '../routes'

const app = new OpenAPIHono()

export const generalHandler = app.openapi(postCreateTestCardRangesRoute, (c) => {
  throw new Error('Not implemented')
})

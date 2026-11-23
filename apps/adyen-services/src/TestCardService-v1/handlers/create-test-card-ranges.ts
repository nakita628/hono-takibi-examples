import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateTestCardRangesRoute } from '../routes'

const app = new OpenAPIHono()

export const createTestCardRangesHandler = app.openapi(postCreateTestCardRangesRoute, (c) => {
  throw new Error('Not implemented')
})

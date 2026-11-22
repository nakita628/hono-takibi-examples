import { OpenAPIHono } from '@hono/zod-openapi'
import { getApi1FixedAssetsRoute } from '../routes'

const app = new OpenAPIHono()

export const fixedAssetsHandler = app.openapi(getApi1FixedAssetsRoute, (c) => {
  throw new Error('Not implemented')
})

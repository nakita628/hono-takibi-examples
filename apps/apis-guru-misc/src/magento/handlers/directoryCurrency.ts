import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DirectoryCurrencyRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryCurrencyHandler = app.openapi(getV1DirectoryCurrencyRoute, (c) => {
  throw new Error('Not implemented')
})

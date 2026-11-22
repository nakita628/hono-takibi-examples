import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3IndexerflagRoute } from '../routes'

const app = new OpenAPIHono()

export const indexerFlagHandler = app.openapi(getApiV3IndexerflagRoute, (c) => {
  throw new Error('Not implemented')
})

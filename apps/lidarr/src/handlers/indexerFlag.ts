import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1IndexerflagRoute } from '../routes'

const app = new OpenAPIHono()

export const indexerFlagHandler = app.openapi(getApiV1IndexerflagRoute, (c) => {
  throw new Error('Not implemented')
})

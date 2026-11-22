import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1OrgsOrgIdCrlRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsCRLHandler = app.openapi(getApiV1OrgsOrgIdCrlRoute, (c) => {
  throw new Error('Not implemented')
})

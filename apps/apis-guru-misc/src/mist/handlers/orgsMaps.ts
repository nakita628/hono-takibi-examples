import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1OrgsOrgIdMapsImportRoute } from '../routes'

const app = new OpenAPIHono()

export const orgsMapsHandler = app.openapi(postApiV1OrgsOrgIdMapsImportRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV2OrgDisableRoute } from '../routes'

const app = new OpenAPIHono()

export const customerOrgHandler = app.openapi(postApiV2OrgDisableRoute, (c) => {
  throw new Error('Not implemented')
})

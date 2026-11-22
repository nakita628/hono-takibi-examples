import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ParentInfoTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app.openapi(getV2ParentInfoTypesRoute, (c) => {
  throw new Error('Not implemented')
})

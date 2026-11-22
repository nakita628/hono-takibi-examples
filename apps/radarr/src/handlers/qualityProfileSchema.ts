import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3QualityprofileSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const qualityProfileSchemaHandler = app.openapi(getApiV3QualityprofileSchemaRoute, (c) => {
  throw new Error('Not implemented')
})

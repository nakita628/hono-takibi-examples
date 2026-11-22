import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1QualityprofileSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const qualityProfileSchemaHandler = app.openapi(getApiV1QualityprofileSchemaRoute, (c) => {
  throw new Error('Not implemented')
})

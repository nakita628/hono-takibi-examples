import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceConditionsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceConditionsHandler = app.openapi(getV3ReferenceConditionsRoute, (c) => {
  throw new Error('Not implemented')
})

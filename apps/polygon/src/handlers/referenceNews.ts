import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ReferenceNewsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceNewsHandler = app.openapi(getV2ReferenceNewsRoute, (c) => {
  throw new Error('Not implemented')
})

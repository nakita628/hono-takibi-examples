import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReferenceSecFilingsFilingIdRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceSecFilingHandler = app.openapi(getV1ReferenceSecFilingsFilingIdRoute, (c) => {
  throw new Error('Not implemented')
})

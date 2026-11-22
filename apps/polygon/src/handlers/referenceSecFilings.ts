import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ReferenceSecFilingsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceSecFilingsHandler = app.openapi(getV1ReferenceSecFilingsRoute, (c) => {
  throw new Error('Not implemented')
})

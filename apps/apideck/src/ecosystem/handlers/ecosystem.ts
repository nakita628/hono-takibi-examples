import { OpenAPIHono } from '@hono/zod-openapi'
import { getEcosystemsEcosystemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ecosystemHandler = app.openapi(getEcosystemsEcosystemIdRoute, (c) => {
  throw new Error('Not implemented')
})

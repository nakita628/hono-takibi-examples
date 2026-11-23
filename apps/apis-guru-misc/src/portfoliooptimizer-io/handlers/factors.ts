import { OpenAPIHono } from '@hono/zod-openapi'
import { postFactorsResidualizationRoute } from '../routes'

const app = new OpenAPIHono()

export const factorsHandler = app.openapi(postFactorsResidualizationRoute, (c) => {
  throw new Error('Not implemented')
})

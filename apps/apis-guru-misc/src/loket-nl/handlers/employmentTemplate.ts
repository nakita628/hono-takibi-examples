import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersEmployersEmployerIdEmploymenttemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const employmentTemplateHandler = app.openapi(
  getProvidersEmployersEmployerIdEmploymenttemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

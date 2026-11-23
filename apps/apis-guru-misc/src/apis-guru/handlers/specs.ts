import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpecsProviderApiJsonRoute, getSpecsProviderServiceApiJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const specsHandler = app
  .openapi(getSpecsProviderApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsProviderServiceApiJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

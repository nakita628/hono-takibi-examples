import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpecsCarAutoCompleteRoute, getSpecsCarTermsRoute } from '../routes'

const app = new OpenAPIHono()

export const specsHandler = app
  .openapi(getSpecsCarAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpecsCarTermsRoute, (c) => {
    throw new Error('Not implemented')
  })

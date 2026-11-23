import { OpenAPIHono } from '@hono/zod-openapi'
import { getVariantsRoute, getVariantsVariantRoute } from '../routes'

const app = new OpenAPIHono()

export const variantsHandler = app
  .openapi(getVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVariantsVariantRoute, (c) => {
    throw new Error('Not implemented')
  })

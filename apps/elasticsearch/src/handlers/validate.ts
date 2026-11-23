import { OpenAPIHono } from '@hono/zod-openapi'
import { getValidateQueryRoute, postValidateQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const validateHandler = app
  .openapi(getValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getValidateNameNameRoute, getValidateUuidUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const utilHandler = app
  .openapi(getValidateNameNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValidateUuidUuidRoute, (c) => {
    throw new Error('Not implemented')
  })

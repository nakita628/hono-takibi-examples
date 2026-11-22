import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4FieldsAllRoute, getV4FieldsFieldIdRoute, getV4FieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const fieldsHandler = app
  .openapi(getV4FieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FieldsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4FieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })

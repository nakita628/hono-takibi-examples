import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceCredentialTypesIdRoute, getServiceCredentialTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceCredentialTypeHandler = app
  .openapi(getServiceCredentialTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceCredentialTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

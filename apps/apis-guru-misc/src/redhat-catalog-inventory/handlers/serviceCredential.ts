import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceCredentialsIdRoute, getServiceCredentialsRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceCredentialHandler = app
  .openapi(getServiceCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

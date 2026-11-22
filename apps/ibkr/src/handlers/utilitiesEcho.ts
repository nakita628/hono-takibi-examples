import { OpenAPIHono } from '@hono/zod-openapi'
import { getGwApiV1EchoHttpsRoute, postGwApiV1EchoSignedJwtRoute } from '../routes'

const app = new OpenAPIHono()

export const utilitiesEchoHandler = app
  .openapi(postGwApiV1EchoSignedJwtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EchoHttpsRoute, (c) => {
    throw new Error('Not implemented')
  })

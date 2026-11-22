import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PrivateGuardrailsRoute, postV1PrivateGuardrailsValidationsRoute } from '../routes'

const app = new OpenAPIHono()

export const guardrailsHandler = app
  .openapi(postV1PrivateGuardrailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateGuardrailsValidationsRoute, (c) => {
    throw new Error('Not implemented')
  })

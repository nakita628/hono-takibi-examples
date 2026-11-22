import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VerificationResultRoute, postV1VerificationSendRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1VerificationResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VerificationSendRoute, (c) => {
    throw new Error('Not implemented')
  })

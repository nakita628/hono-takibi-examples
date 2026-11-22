import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1RsaSignaturesDecryptRoute, postV1RsaSignaturesRoute } from '../routes'

const app = new OpenAPIHono()

export const rsaSignaturesHandler = app
  .openapi(postV1RsaSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RsaSignaturesDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })

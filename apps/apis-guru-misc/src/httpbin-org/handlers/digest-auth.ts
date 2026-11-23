import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDigestAuthQopUserPasswdAlgorithmRoute,
  getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute,
  getDigestAuthQopUserPasswdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const digestAuthHandler = app
  .openapi(getDigestAuthQopUserPasswdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigestAuthQopUserPasswdAlgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute, (c) => {
    throw new Error('Not implemented')
  })

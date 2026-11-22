import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBasicAuthUserPasswdRoute,
  getBearerRoute,
  getDigestAuthQopUserPasswdAlgorithmRoute,
  getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute,
  getDigestAuthQopUserPasswdRoute,
  getHiddenBasicAuthUserPasswdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(getBasicAuthUserPasswdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigestAuthQopUserPasswdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigestAuthQopUserPasswdAlgorithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDigestAuthQopUserPasswdAlgorithmStaleAfterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHiddenBasicAuthUserPasswdRoute, (c) => {
    throw new Error('Not implemented')
  })

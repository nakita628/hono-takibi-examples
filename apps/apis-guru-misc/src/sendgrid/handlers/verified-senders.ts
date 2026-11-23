import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVerifiedSendersIdRoute,
  getVerifiedSendersDomainsRoute,
  getVerifiedSendersRoute,
  getVerifiedSendersStepsCompletedRoute,
  getVerifiedSendersVerifyTokenRoute,
  patchVerifiedSendersIdRoute,
  postVerifiedSendersResendIdRoute,
  postVerifiedSendersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verifiedSendersHandler = app
  .openapi(getVerifiedSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifiedSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifiedSendersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifiedSendersResendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifiedSendersStepsCompletedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifiedSendersVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVerifiedSendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVerifiedSendersIdRoute, (c) => {
    throw new Error('Not implemented')
  })

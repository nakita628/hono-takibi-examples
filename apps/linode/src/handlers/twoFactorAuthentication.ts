import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiVersionProfileTfaDisableRoute,
  postApiVersionProfileTfaEnableConfirmRoute,
  postApiVersionProfileTfaEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const twoFactorAuthenticationHandler = app
  .openapi(postApiVersionProfileTfaDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTfaEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionProfileTfaEnableConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })

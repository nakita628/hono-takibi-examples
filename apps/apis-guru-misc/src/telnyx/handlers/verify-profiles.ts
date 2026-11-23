import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVerifyProfilesVerifyProfileIdRoute,
  getVerifyProfilesRoute,
  getVerifyProfilesVerifyProfileIdRoute,
  patchVerifyProfilesVerifyProfileIdRoute,
  postVerifyProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verifyProfilesHandler = app
  .openapi(getVerifyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })

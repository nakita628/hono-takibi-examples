import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1B2bRecoveryCodesOrganizationIdMemberIdRoute,
  postV1B2bRecoveryCodesRecoverRoute,
  postV1B2bRecoveryCodesRotateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const b2BRecoveryCodesHandler = app
  .openapi(postV1B2bRecoveryCodesRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1B2bRecoveryCodesOrganizationIdMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1B2bRecoveryCodesRotateRoute, (c) => {
    throw new Error('Not implemented')
  })

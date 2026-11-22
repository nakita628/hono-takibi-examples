import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirDirIdVerifyEmailRoute,
  postDirDirIdVerifyEmailConfirmRoute,
  postDirDirIdVerifyEmailRoute,
  postEnterprisesEnterpriseIdVerifyEmailConfirmRoute,
  postEnterprisesEnterpriseIdVerifyEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailVerificationHandler = app
  .openapi(getDirDirIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdVerifyEmailConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdVerifyEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseIdVerifyEmailConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })

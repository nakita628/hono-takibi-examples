import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2VerifiedResourcesEmailsIdRoute,
  getV2VerifiedResourcesEmailsRoute,
  getV2VerifiedResourcesPhonesIdRoute,
  getV2VerifiedResourcesPhonesRoute,
  postV2VerifiedResourcesEmailsVerificationCodeRequestRoute,
  postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute,
  postV2VerifiedResourcesPhonesVerificationCodeRequestRoute,
  postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verifiedResourcesHandler = app
  .openapi(postV2VerifiedResourcesEmailsVerificationCodeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesPhonesVerificationCodeRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesEmailsVerificationCodeVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2VerifiedResourcesPhonesVerificationCodeVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesPhonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesEmailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2VerifiedResourcesPhonesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionPhoneNumberIDBusinessComplianceInfoRoute,
  postVersionPhoneNumberIDBusinessComplianceInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessComplianceHandler = app
  .openapi(getVersionPhoneNumberIDBusinessComplianceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionPhoneNumberIDBusinessComplianceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

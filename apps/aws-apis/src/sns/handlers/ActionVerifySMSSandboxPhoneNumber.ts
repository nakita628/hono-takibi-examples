import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionVerifySMSSandboxPhoneNumberRoute,
  postActionVerifySMSSandboxPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionVerifySMSSandboxPhoneNumberHandler = app
  .openapi(getActionVerifySMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionVerifySMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

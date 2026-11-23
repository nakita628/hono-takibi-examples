import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateSMSSandboxPhoneNumberRoute,
  postActionCreateSMSSandboxPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateSmsSandboxPhoneNumberHandler = app
  .openapi(getActionCreateSMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

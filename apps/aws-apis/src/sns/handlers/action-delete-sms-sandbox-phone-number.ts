import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSMSSandboxPhoneNumberRoute,
  postActionDeleteSMSSandboxPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteSmsSandboxPhoneNumberHandler = app
  .openapi(getActionDeleteSMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSMSSandboxPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

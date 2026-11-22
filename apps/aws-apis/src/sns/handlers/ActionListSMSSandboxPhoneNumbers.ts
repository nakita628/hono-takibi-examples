import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListSMSSandboxPhoneNumbersRoute,
  postActionListSMSSandboxPhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListSMSSandboxPhoneNumbersHandler = app
  .openapi(getActionListSMSSandboxPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSMSSandboxPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })

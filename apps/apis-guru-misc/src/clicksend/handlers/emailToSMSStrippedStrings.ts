import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsEmailSmsStrippedStringsRuleIdRoute,
  getSmsEmailSmsStrippedStringsRoute,
  getSmsEmailSmsStrippedStringsRuleIdRoute,
  postSmsEmailSmsStrippedStringsRoute,
  putSmsEmailSmsStrippedStringsRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailToSMSStrippedStringsHandler = app
  .openapi(getSmsEmailSmsStrippedStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsEmailSmsStrippedStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

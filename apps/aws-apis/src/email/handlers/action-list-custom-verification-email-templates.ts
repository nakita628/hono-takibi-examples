import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListCustomVerificationEmailTemplatesRoute,
  postActionListCustomVerificationEmailTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListCustomVerificationEmailTemplatesHandler = app
  .openapi(getActionListCustomVerificationEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListCustomVerificationEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })

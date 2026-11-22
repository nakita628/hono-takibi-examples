import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCustomVerificationEmailTemplateRoute,
  postActionCreateCustomVerificationEmailTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCustomVerificationEmailTemplateHandler = app
  .openapi(getActionCreateCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

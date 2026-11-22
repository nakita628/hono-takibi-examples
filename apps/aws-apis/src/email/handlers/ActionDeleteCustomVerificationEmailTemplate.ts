import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCustomVerificationEmailTemplateRoute,
  postActionDeleteCustomVerificationEmailTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCustomVerificationEmailTemplateHandler = app
  .openapi(getActionDeleteCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

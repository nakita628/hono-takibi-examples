import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetCustomVerificationEmailTemplateRoute,
  postActionGetCustomVerificationEmailTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetCustomVerificationEmailTemplateHandler = app
  .openapi(getActionGetCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

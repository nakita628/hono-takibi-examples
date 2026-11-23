import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateCustomVerificationEmailTemplateRoute,
  postActionUpdateCustomVerificationEmailTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateCustomVerificationEmailTemplateHandler = app
  .openapi(getActionUpdateCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateCustomVerificationEmailTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

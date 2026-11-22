import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSendCustomVerificationEmailRoute,
  postActionSendCustomVerificationEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSendCustomVerificationEmailHandler = app
  .openapi(getActionSendCustomVerificationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendCustomVerificationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

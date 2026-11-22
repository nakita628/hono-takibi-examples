import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailValidationsBatchIdRoute,
  postEmailValidationsBatchRoute,
  postEmailValidationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailValidationsHandler = app
  .openapi(postEmailValidationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailValidationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailValidationsBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })

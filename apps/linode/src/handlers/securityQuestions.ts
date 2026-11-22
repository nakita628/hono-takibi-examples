import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionProfileSecurityQuestionsRoute,
  postApiVersionProfileSecurityQuestionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityQuestionsHandler = app
  .openapi(postApiVersionProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })

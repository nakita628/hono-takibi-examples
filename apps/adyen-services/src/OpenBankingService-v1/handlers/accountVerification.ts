import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountVerificationReportsCodeRoute,
  postAccountVerificationRoutesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountVerificationHandler = app
  .openapi(getAccountVerificationReportsCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountVerificationRoutesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccessConsentsConsentIdRoute,
  getAccountAccessConsentsConsentIdRoute,
  postAccountAccessConsentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountAccessConsentsHandler = app
  .openapi(postAccountAccessConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountAccessConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountAccessConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })

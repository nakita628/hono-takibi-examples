import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateServiceSpecificCredentialRoute,
  postActionCreateServiceSpecificCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateServiceSpecificCredentialHandler = app
  .openapi(getActionCreateServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })

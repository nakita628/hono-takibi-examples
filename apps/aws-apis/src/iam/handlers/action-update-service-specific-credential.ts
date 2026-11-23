import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateServiceSpecificCredentialRoute,
  postActionUpdateServiceSpecificCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionUpdateServiceSpecificCredentialHandler = app
  .openapi(getActionUpdateServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })

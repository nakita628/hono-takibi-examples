import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteServiceSpecificCredentialRoute,
  postActionDeleteServiceSpecificCredentialRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteServiceSpecificCredentialHandler = app
  .openapi(getActionDeleteServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteServiceSpecificCredentialRoute, (c) => {
    throw new Error('Not implemented')
  })

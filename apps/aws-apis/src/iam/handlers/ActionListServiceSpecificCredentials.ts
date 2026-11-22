import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListServiceSpecificCredentialsRoute,
  postActionListServiceSpecificCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListServiceSpecificCredentialsHandler = app
  .openapi(getActionListServiceSpecificCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListServiceSpecificCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCredentialsNameRoute,
  getCredentialsNameRoute,
  getCredentialsRoute,
  patchCredentialsNameRoute,
  postCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app
  .openapi(postCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCredentialsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCredentialsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCredentialsNameRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTelephonyCredentialsIdTokenMaterialRoute,
  postTelephonyCredentialsIdTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTokensHandler = app
  .openapi(postTelephonyCredentialsIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelephonyCredentialsIdTokenMaterialRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTelephonyCredentialsIdRoute,
  getTelephonyCredentialsIdRoute,
  getTelephonyCredentialsRoute,
  getTelephonyCredentialsTagsRoute,
  patchTelephonyCredentialsIdRoute,
  postTelephonyCredentialsIdActionsActionRoute,
  postTelephonyCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const credentialsHandler = app
  .openapi(getTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelephonyCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelephonyCredentialsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTelephonyCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTelephonyCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTelephonyCredentialsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTelephonyCredentialsIdActionsActionRoute, (c) => {
    throw new Error('Not implemented')
  })

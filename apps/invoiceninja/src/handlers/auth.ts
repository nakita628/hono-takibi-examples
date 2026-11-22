import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SettingsPasskeysPasskeyRoute,
  getApiV1SettingsPasskeysRoute,
  postApiV1LoginRoute,
  postApiV1PasskeysLoginOptionsRoute,
  postApiV1SettingsPasskeysOptionsRoute,
  postApiV1SettingsPasskeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authHandler = app
  .openapi(postApiV1LoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PasskeysLoginOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SettingsPasskeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsPasskeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SettingsPasskeysOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SettingsPasskeysPasskeyRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUByExternalExternalIdJsonRoute,
  getUByExternalProviderExternalIdJsonRoute,
  getUUsernameEmailsJsonRoute,
  getUUsernameJsonRoute,
  putUUsernameJsonRoute,
  putUUsernamePreferencesAvatarPickJsonRoute,
  putUUsernamePreferencesEmailJsonRoute,
  putUUsernamePreferencesUsernameJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uHandler = app
  .openapi(getUUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUByExternalExternalIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUByExternalProviderExternalIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesAvatarPickJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesEmailJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUUsernamePreferencesUsernameJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUUsernameEmailsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })

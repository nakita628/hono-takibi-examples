import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMailSettingsAddressWhitelistRoute,
  getMailSettingsBouncePurgeRoute,
  getMailSettingsFooterRoute,
  getMailSettingsForwardBounceRoute,
  getMailSettingsForwardSpamRoute,
  getMailSettingsRoute,
  getMailSettingsTemplateRoute,
  patchMailSettingsAddressWhitelistRoute,
  patchMailSettingsBouncePurgeRoute,
  patchMailSettingsFooterRoute,
  patchMailSettingsForwardBounceRoute,
  patchMailSettingsForwardSpamRoute,
  patchMailSettingsTemplateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mailSettingsHandler = app
  .openapi(getMailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsAddressWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsAddressWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsBouncePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsBouncePurgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsFooterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsFooterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsForwardBounceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsForwardBounceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsForwardSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsForwardSpamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMailSettingsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMailSettingsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmDomainsDomainRoute,
  deleteRealmEmojiEmojiNameRoute,
  deleteRealmFiltersFilterIdRoute,
  deleteRealmPlaygroundsPlaygroundIdRoute,
  deleteRealmProfileFieldsFieldIdRoute,
  getRealmDomainsRoute,
  getRealmEmojiRoute,
  getRealmLinkifiersRoute,
  getRealmPresenceRoute,
  getRealmProfileFieldsRoute,
  patchRealmDomainsDomainRoute,
  patchRealmFiltersFilterIdRoute,
  patchRealmLinkifiersRoute,
  patchRealmProfileFieldsFieldIdRoute,
  patchRealmProfileFieldsRoute,
  patchRealmUserSettingsDefaultsRoute,
  postRealmDeactivateRoute,
  postRealmDomainsRoute,
  postRealmEmojiEmojiNameRoute,
  postRealmFiltersRoute,
  postRealmPlaygroundsRoute,
  postRealmProfileFieldsRoute,
  postRealmTestWelcomeBotCustomMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realmHandler = app
  .openapi(postRealmEmojiEmojiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmEmojiEmojiNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmEmojiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmProfileFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmProfileFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmProfileFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmProfileFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmProfileFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmUserSettingsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmLinkifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmLinkifiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRealmFiltersFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmPlaygroundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmPlaygroundsPlaygroundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmTestWelcomeBotCustomMessageRoute, (c) => {
    throw new Error('Not implemented')
  })

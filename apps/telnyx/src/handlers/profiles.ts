import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiMemoryNamespacesNamespaceProfilesProfileIdRoute,
  deleteMessagingProfilesIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRoute,
  getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRoute,
  getAiMemoryNamespacesNamespaceProfilesRoute,
  getMessagingProfilesIdPhoneNumbersRoute,
  getMessagingProfilesIdRoute,
  getMessagingProfilesIdShortCodesRoute,
  getMessagingProfilesRoute,
  patchMessagingProfilesIdRoute,
  postMessagingProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profilesHandler = app
  .openapi(getAiMemoryNamespacesNamespaceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiMemoryNamespacesNamespaceProfilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiMemoryNamespacesNamespaceProfilesProfileIdMemoriesMemoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessagingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessagingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagingProfilesIdShortCodesRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4NamespacesIdStorageLimitExclusionRoute,
  getApiV4NamespacesIdExistsRoute,
  getApiV4NamespacesIdGitlabSubscriptionRoute,
  getApiV4NamespacesIdRoute,
  getApiV4NamespacesRoute,
  getApiV4NamespacesStorageLimitExclusionsRoute,
  postApiV4NamespacesIdStorageLimitExclusionRoute,
  putApiV4NamespacesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const namespacesHandler = app
  .openapi(putApiV4NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4NamespacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4NamespacesIdGitlabSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4NamespacesIdStorageLimitExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4NamespacesIdStorageLimitExclusionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4NamespacesStorageLimitExclusionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4NamespacesIdExistsRoute, (c) => {
    throw new Error('Not implemented')
  })

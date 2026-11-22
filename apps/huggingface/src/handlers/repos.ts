import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRepoTypeNamespaceRepoDuplicateStatusRoute,
  getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute,
  postApiReposCreateRoute,
  postApiRepoTypeNamespaceRepoDuplicateRoute,
  postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reposHandler = app
  .openapi(getApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoSettingsTrustedPublishersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRepoTypeNamespaceRepoDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRepoTypeNamespaceRepoDuplicateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReposCreateRoute, (c) => {
    throw new Error('Not implemented')
  })

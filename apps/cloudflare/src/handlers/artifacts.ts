import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdArtifactsNamespacesNamespaceReposNameRoute,
  deleteAccountsAccountIdArtifactsNamespacesNamespaceRoute,
  deleteAccountsAccountIdArtifactsNamespacesNamespaceTokensIdRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameBlobHashRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameCommitHashRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameFileRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameLogRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameRawRefPathRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameTokensRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposNameTreeHashRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceReposRoute,
  getAccountsAccountIdArtifactsNamespacesNamespaceRoute,
  getAccountsAccountIdArtifactsNamespacesRoute,
  postAccountsAccountIdArtifactsNamespacesNamespaceReposNameForkRoute,
  postAccountsAccountIdArtifactsNamespacesNamespaceReposNameImportRoute,
  postAccountsAccountIdArtifactsNamespacesNamespaceReposRoute,
  postAccountsAccountIdArtifactsNamespacesNamespaceTokensRoute,
  postAccountsAccountIdArtifactsNamespacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const artifactsHandler = app
  .openapi(getAccountsAccountIdArtifactsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdArtifactsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdArtifactsNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdArtifactsNamespacesNamespaceReposRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdArtifactsNamespacesNamespaceReposNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameBlobHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameCommitHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdArtifactsNamespacesNamespaceReposNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdArtifactsNamespacesNamespaceReposNameImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameRawRefPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdArtifactsNamespacesNamespaceReposNameTreeHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdArtifactsNamespacesNamespaceTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdArtifactsNamespacesNamespaceTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })

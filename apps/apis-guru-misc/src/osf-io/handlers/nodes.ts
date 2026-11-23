import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNodesNodeIdContributorsUserIdIndexRoute,
  deleteNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  deleteNodesNodeIdIndexRoute,
  getNodesIndexRoute,
  getNodesNodeIdAddonsIndexRoute,
  getNodesNodeIdAddonsProviderFoldersIndexRoute,
  getNodesNodeIdAddonsProviderIndexRoute,
  getNodesNodeIdChildrenIndexRoute,
  getNodesNodeIdCitationIndexRoute,
  getNodesNodeIdCitationStyleIdIndexRoute,
  getNodesNodeIdCommentsIndexRoute,
  getNodesNodeIdContributorsIndexRoute,
  getNodesNodeIdContributorsUserIdIndexRoute,
  getNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  getNodesNodeIdDraftRegistrationsIndexRoute,
  getNodesNodeIdFilesIndexRoute,
  getNodesNodeIdFilesProviderIndexRoute,
  getNodesNodeIdFilesProviderPathIndexRoute,
  getNodesNodeIdFilesProvidersProviderIndexRoute,
  getNodesNodeIdForksIndexRoute,
  getNodesNodeIdIdentifiersIndexRoute,
  getNodesNodeIdIndexRoute,
  getNodesNodeIdInstitutionsIndexRoute,
  getNodesNodeIdLinkedNodesIndexRoute,
  getNodesNodeIdLogsIndexRoute,
  getNodesNodeIdPreprintsIndexRoute,
  getNodesNodeIdRegistrationsIndexRoute,
  getNodesNodeIdViewOnlyLinksIndexRoute,
  getNodesNodeIdViewOnlyLinksLinkIdIndexRoute,
  getNodesNodeIdWikisIndexRoute,
  patchNodesNodeIdAddonsProviderIndexRoute,
  patchNodesNodeIdContributorsUserIdIndexRoute,
  patchNodesNodeIdDraftRegistrationsDraftIdIndexRoute,
  patchNodesNodeIdIndexRoute,
  postNodesIndexRoute,
  postNodesNodeIdChildrenIndexRoute,
  postNodesNodeIdCommentsIndexRoute,
  postNodesNodeIdContributorsIndexRoute,
  postNodesNodeIdDraftRegistrationsIndexRoute,
  postNodesNodeIdForksIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodesHandler = app
  .openapi(getNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodesNodeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNodesNodeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdAddonsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdAddonsProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNodesNodeIdAddonsProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdAddonsProviderFoldersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdChildrenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdChildrenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdCitationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdCitationStyleIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdCommentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdCommentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodesNodeIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNodesNodeIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdDraftRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdDraftRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNodesNodeIdDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNodesNodeIdDraftRegistrationsDraftIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdFilesProvidersProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdFilesProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdFilesProviderPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdForksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNodesNodeIdForksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdIdentifiersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdInstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdLinkedNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdPreprintsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdViewOnlyLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdViewOnlyLinksLinkIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNodesNodeIdWikisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

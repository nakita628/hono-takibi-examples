import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRegistrationsIndexRoute,
  getRegistrationsRegistrationIdChildrenIndexRoute,
  getRegistrationsRegistrationIdCitationsCitationIdIndexRoute,
  getRegistrationsRegistrationIdCitationsIndexRoute,
  getRegistrationsRegistrationIdCommentsIndexRoute,
  getRegistrationsRegistrationIdContributorsIndexRoute,
  getRegistrationsRegistrationIdContributorsUserIdIndexRoute,
  getRegistrationsRegistrationIdFilesIndexRoute,
  getRegistrationsRegistrationIdFilesProviderIndexRoute,
  getRegistrationsRegistrationIdFilesProviderPathIndexRoute,
  getRegistrationsRegistrationIdForksIndexRoute,
  getRegistrationsRegistrationIdIdentifiersIndexRoute,
  getRegistrationsRegistrationIdIndexRoute,
  getRegistrationsRegistrationIdInstitutionsIndexRoute,
  getRegistrationsRegistrationIdLinkedNodesIndexRoute,
  getRegistrationsRegistrationIdLogsIndexRoute,
  getRegistrationsRegistrationIdViewOnlyLinksIndexRoute,
  getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRoute,
  getRegistrationsRegistrationIdWikisIndexRoute,
  patchRegistrationsRegistrationIdIndexRoute,
  postRegistrationsRegistrationIdForksIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrationsHandler = app
  .openapi(getRegistrationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRegistrationsRegistrationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdChildrenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdCitationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdCitationsCitationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdCommentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdContributorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdContributorsUserIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdFilesProviderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdFilesProviderPathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdForksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegistrationsRegistrationIdForksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdIdentifiersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdInstitutionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdLinkedNodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdLogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdViewOnlyLinksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdViewOnlyLinksLinkIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRegistrationsRegistrationIdWikisIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

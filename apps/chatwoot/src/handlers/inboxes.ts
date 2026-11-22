import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdInboxMembersRoute,
  getApiV1AccountsAccountIdBrandedEmailLayoutRoute,
  getApiV1AccountsAccountIdInboxesIdAgentBotRoute,
  getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute,
  getApiV1AccountsAccountIdInboxesIdRoute,
  getApiV1AccountsAccountIdInboxesRoute,
  getApiV1AccountsAccountIdInboxMembersInboxIdRoute,
  patchApiV1AccountsAccountIdBrandedEmailLayoutRoute,
  patchApiV1AccountsAccountIdInboxesIdRoute,
  patchApiV1AccountsAccountIdInboxMembersRoute,
  postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute,
  postApiV1AccountsAccountIdInboxesRoute,
  postApiV1AccountsAccountIdInboxMembersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboxesHandler = app
  .openapi(getApiV1AccountsAccountIdBrandedEmailLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdBrandedEmailLayoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdInboxesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxesIdAgentBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxesIdSetAgentBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdInboxMembersInboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdInboxMembersRoute, (c) => {
    throw new Error('Not implemented')
  })

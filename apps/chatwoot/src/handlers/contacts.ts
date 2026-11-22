import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AccountsAccountIdContactsIdRoute,
  getApiV1AccountsAccountIdContactsIdContactableInboxesRoute,
  getApiV1AccountsAccountIdContactsIdConversationsRoute,
  getApiV1AccountsAccountIdContactsIdRoute,
  getApiV1AccountsAccountIdContactsRoute,
  getApiV1AccountsAccountIdContactsSearchRoute,
  postApiV1AccountsAccountIdActionsContactMergeRoute,
  postApiV1AccountsAccountIdContactsFilterRoute,
  postApiV1AccountsAccountIdContactsIdContactInboxesRoute,
  postApiV1AccountsAccountIdContactsRoute,
  postApiV1AccountsAccountIdDataExportsRoute,
  putApiV1AccountsAccountIdContactsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getApiV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AccountsAccountIdContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdContactsIdContactInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AccountsAccountIdContactsIdContactableInboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdDataExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AccountsAccountIdActionsContactMergeRoute, (c) => {
    throw new Error('Not implemented')
  })

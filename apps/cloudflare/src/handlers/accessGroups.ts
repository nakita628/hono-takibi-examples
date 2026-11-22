import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  deleteAccountsAccountIdAccessGroupsGroupIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  getAccountOrZoneAccountOrZoneIdAccessGroupsRoute,
  getAccountsAccountIdAccessGroupsGroupIdRoute,
  getAccountsAccountIdAccessGroupsRoute,
  postAccountOrZoneAccountOrZoneIdAccessGroupsRoute,
  postAccountsAccountIdAccessGroupsRoute,
  putAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute,
  putAccountsAccountIdAccessGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessGroupsHandler = app
  .openapi(getAccountsAccountIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountOrZoneAccountOrZoneIdAccessGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })

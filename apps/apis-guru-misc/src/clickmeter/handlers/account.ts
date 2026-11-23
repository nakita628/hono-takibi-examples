import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountDomainwhitelistWhitelistIdRoute,
  deleteAccountGuestsGuestIdRoute,
  deleteAccountIpblacklistBlacklistIdRoute,
  getAccountDomainwhitelistRoute,
  getAccountGuestsCountRoute,
  getAccountGuestsGuestIdPermissionsCountRoute,
  getAccountGuestsGuestIdPermissionsRoute,
  getAccountGuestsGuestIdRoute,
  getAccountGuestsRoute,
  getAccountIpblacklistRoute,
  getAccountPlanRoute,
  getAccountRoute,
  postAccountDomainwhitelistRoute,
  postAccountGuestsGuestIdRoute,
  postAccountGuestsGuestIdTypePermissionsPatchRoute,
  postAccountGuestsRoute,
  postAccountIpblacklistRoute,
  postAccountRoute,
  putAccountGuestsGuestIdTypePermissionsPatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(getAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountDomainwhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountDomainwhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountDomainwhitelistWhitelistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGuestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountGuestsGuestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGuestsGuestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountGuestsGuestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGuestsGuestIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountGuestsGuestIdPermissionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountGuestsGuestIdTypePermissionsPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountGuestsGuestIdTypePermissionsPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountIpblacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountIpblacklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountIpblacklistBlacklistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountPlanRoute, (c) => {
    throw new Error('Not implemented')
  })

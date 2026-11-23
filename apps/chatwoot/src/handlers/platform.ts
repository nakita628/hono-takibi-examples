import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlatformApiV1AccountsAccountIdAccountUsersRoute,
  deletePlatformApiV1AccountsAccountIdRoute,
  deletePlatformApiV1AgentBotsIdRoute,
  deletePlatformApiV1UsersIdRoute,
  getPlatformApiV1AccountsAccountIdAccountUsersRoute,
  getPlatformApiV1AccountsAccountIdRoute,
  getPlatformApiV1AgentBotsIdRoute,
  getPlatformApiV1AgentBotsRoute,
  getPlatformApiV1UsersIdLoginRoute,
  getPlatformApiV1UsersIdRoute,
  patchPlatformApiV1AccountsAccountIdRoute,
  patchPlatformApiV1AgentBotsIdRoute,
  patchPlatformApiV1UsersIdRoute,
  postPlatformApiV1AccountsAccountIdAccountUsersRoute,
  postPlatformApiV1AccountsRoute,
  postPlatformApiV1AgentBotsRoute,
  postPlatformApiV1UsersIdTokenRoute,
  postPlatformApiV1UsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformHandler = app
  .openapi(postPlatformApiV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AccountsAccountIdAccountUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1AgentBotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1AgentBotsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlatformApiV1UsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformApiV1UsersIdLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformApiV1UsersIdTokenRoute, (c) => {
    throw new Error('Not implemented')
  })

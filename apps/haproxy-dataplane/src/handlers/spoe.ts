import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxySpoeSpoeFilesNameRoute,
  deleteServicesHaproxySpoeSpoeFilesParentNameScopesNameRoute,
  deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute,
  deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute,
  deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute,
  getServicesHaproxySpoeParentNameVersionRoute,
  getServicesHaproxySpoeSpoeFilesNameRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesNameRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute,
  getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesRoute,
  getServicesHaproxySpoeSpoeFilesRoute,
  postServicesHaproxySpoeSpoeFilesParentNameScopesRoute,
  postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsRoute,
  postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsRoute,
  postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesRoute,
  postServicesHaproxySpoeSpoeFilesRoute,
  putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute,
  putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute,
  putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spoeHandler = app
  .openapi(getServicesHaproxySpoeParentNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesParentNameScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesParentNameScopesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameAgentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxySpoeSpoeFilesParentNameScopesScopeNameMessagesNameRoute, (c) => {
    throw new Error('Not implemented')
  })

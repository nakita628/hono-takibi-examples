import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequestsGrantRequestsUuidIndexRoute,
  deleteRequestsGrantRequestsUuidRevokeIndexRoute,
  deleteRequestsRuleBindingsUuidIndexRoute,
  deleteRequestsRuleChildBindingsUuidIndexRoute,
  deleteRequestsRulesUuidIndexRoute,
  getRequestsGrantRequestsIndexRoute,
  getRequestsGrantRequestsPendingReviewIndexRoute,
  getRequestsGrantRequestsUuidIndexRoute,
  getRequestsRuleBindingsIndexRoute,
  getRequestsRuleBindingsUuidIndexRoute,
  getRequestsRuleBindingsUuidUsedByIndexRoute,
  getRequestsRuleChildBindingsIndexRoute,
  getRequestsRuleChildBindingsUuidIndexRoute,
  getRequestsRuleChildBindingsUuidUsedByIndexRoute,
  getRequestsRulesIndexRoute,
  getRequestsRulesUuidIndexRoute,
  getRequestsRulesUuidUsedByIndexRoute,
  patchRequestsGrantRequestsUuidFulfillIndexRoute,
  patchRequestsRuleBindingsUuidIndexRoute,
  patchRequestsRuleChildBindingsUuidIndexRoute,
  patchRequestsRulesUuidIndexRoute,
  postRequestsGrantRequestsAgentIndexRoute,
  postRequestsGrantRequestsIndexRoute,
  postRequestsRuleBindingsIndexRoute,
  postRequestsRuleChildBindingsIndexRoute,
  postRequestsRulesIndexRoute,
  putRequestsRuleBindingsUuidIndexRoute,
  putRequestsRuleChildBindingsUuidIndexRoute,
  putRequestsRulesUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestsHandler = app
  .openapi(getRequestsGrantRequestsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsGrantRequestsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsGrantRequestsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsGrantRequestsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestsGrantRequestsUuidFulfillIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsGrantRequestsUuidRevokeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsGrantRequestsAgentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsGrantRequestsPendingReviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsRuleBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestsRuleBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestsRuleBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsRuleBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleBindingsUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleChildBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsRuleChildBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleChildBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestsRuleChildBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestsRuleChildBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsRuleChildBindingsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRuleChildBindingsUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequestsRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRulesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestsRulesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestsRulesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequestsRulesUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequestsRulesUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

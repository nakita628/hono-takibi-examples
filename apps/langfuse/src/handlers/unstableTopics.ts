import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPublicUnstableTopicAssignmentsRoute,
  getApiPublicUnstableTopicFacetsFacetIdRoute,
  getApiPublicUnstableTopicFacetsRoute,
  getApiPublicUnstableTopicRulesRoute,
  getApiPublicUnstableTopicRulesRuleIdRoute,
  getApiPublicUnstableTopicsRoute,
  getApiPublicUnstableTopicsTopicIdRoute,
  getApiPublicUnstableTopicSummariesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unstableTopicsHandler = app
  .openapi(getApiPublicUnstableTopicFacetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicFacetsFacetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicsTopicIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableTopicAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

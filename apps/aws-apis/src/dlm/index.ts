import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesPolicyIdIndexRoute,
  deleteTagsResourceArnTagKeysRoute,
  getPoliciesPolicyIdIndexRoute,
  getPoliciesRoute,
  getTagsResourceArnRoute,
  patchPoliciesPolicyIdRoute,
  postPoliciesRoute,
  postTagsResourceArnRoute,
} from './routes'
import {
  deletePoliciesPolicyIdIndexRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getPoliciesPolicyIdIndexRouteHandler,
  getPoliciesRouteHandler,
  getTagsResourceArnRouteHandler,
  patchPoliciesPolicyIdRouteHandler,
  postPoliciesRouteHandler,
  postTagsResourceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPoliciesRoute, postPoliciesRouteHandler)
  .openapi(getPoliciesRoute, getPoliciesRouteHandler)
  .openapi(deletePoliciesPolicyIdIndexRoute, deletePoliciesPolicyIdIndexRouteHandler)
  .openapi(getPoliciesPolicyIdIndexRoute, getPoliciesPolicyIdIndexRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(patchPoliciesPolicyIdRoute, patchPoliciesPolicyIdRouteHandler)

export default app

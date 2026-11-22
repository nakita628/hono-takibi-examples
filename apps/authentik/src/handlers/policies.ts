import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoliciesAllPolicyUuidIndexRoute,
  deletePoliciesBindingsPolicyBindingUuidIndexRoute,
  deletePoliciesDummyPolicyUuidIndexRoute,
  deletePoliciesEventMatcherPolicyUuidIndexRoute,
  deletePoliciesExpressionPolicyUuidIndexRoute,
  deletePoliciesGeoipPolicyUuidIndexRoute,
  deletePoliciesPasswordExpiryPolicyUuidIndexRoute,
  deletePoliciesPasswordPolicyUuidIndexRoute,
  deletePoliciesReputationPolicyUuidIndexRoute,
  deletePoliciesReputationScoresReputationUuidIndexRoute,
  deletePoliciesUniquePasswordPolicyUuidIndexRoute,
  getPoliciesAllCacheInfoIndexRoute,
  getPoliciesAllIndexRoute,
  getPoliciesAllPolicyUuidIndexRoute,
  getPoliciesAllPolicyUuidUsedByIndexRoute,
  getPoliciesAllTypesIndexRoute,
  getPoliciesBindingsIndexRoute,
  getPoliciesBindingsPolicyBindingUuidIndexRoute,
  getPoliciesBindingsPolicyBindingUuidUsedByIndexRoute,
  getPoliciesDummyIndexRoute,
  getPoliciesDummyPolicyUuidIndexRoute,
  getPoliciesDummyPolicyUuidUsedByIndexRoute,
  getPoliciesEventMatcherIndexRoute,
  getPoliciesEventMatcherPolicyUuidIndexRoute,
  getPoliciesEventMatcherPolicyUuidUsedByIndexRoute,
  getPoliciesExpressionIndexRoute,
  getPoliciesExpressionPolicyUuidIndexRoute,
  getPoliciesExpressionPolicyUuidUsedByIndexRoute,
  getPoliciesGeoipIndexRoute,
  getPoliciesGeoipIso3166IndexRoute,
  getPoliciesGeoipPolicyUuidIndexRoute,
  getPoliciesGeoipPolicyUuidUsedByIndexRoute,
  getPoliciesPasswordExpiryIndexRoute,
  getPoliciesPasswordExpiryPolicyUuidIndexRoute,
  getPoliciesPasswordExpiryPolicyUuidUsedByIndexRoute,
  getPoliciesPasswordIndexRoute,
  getPoliciesPasswordPolicyUuidIndexRoute,
  getPoliciesPasswordPolicyUuidUsedByIndexRoute,
  getPoliciesReputationIndexRoute,
  getPoliciesReputationPolicyUuidIndexRoute,
  getPoliciesReputationPolicyUuidUsedByIndexRoute,
  getPoliciesReputationScoresIndexRoute,
  getPoliciesReputationScoresReputationUuidIndexRoute,
  getPoliciesReputationScoresReputationUuidUsedByIndexRoute,
  getPoliciesUniquePasswordIndexRoute,
  getPoliciesUniquePasswordPolicyUuidIndexRoute,
  getPoliciesUniquePasswordPolicyUuidUsedByIndexRoute,
  patchPoliciesBindingsPolicyBindingUuidIndexRoute,
  patchPoliciesDummyPolicyUuidIndexRoute,
  patchPoliciesEventMatcherPolicyUuidIndexRoute,
  patchPoliciesExpressionPolicyUuidIndexRoute,
  patchPoliciesGeoipPolicyUuidIndexRoute,
  patchPoliciesPasswordExpiryPolicyUuidIndexRoute,
  patchPoliciesPasswordPolicyUuidIndexRoute,
  patchPoliciesReputationPolicyUuidIndexRoute,
  patchPoliciesUniquePasswordPolicyUuidIndexRoute,
  postPoliciesAllCacheClearIndexRoute,
  postPoliciesAllPolicyUuidTestIndexRoute,
  postPoliciesBindingsIndexRoute,
  postPoliciesDummyIndexRoute,
  postPoliciesEventMatcherIndexRoute,
  postPoliciesExpressionIndexRoute,
  postPoliciesGeoipIndexRoute,
  postPoliciesPasswordExpiryIndexRoute,
  postPoliciesPasswordIndexRoute,
  postPoliciesReputationIndexRoute,
  postPoliciesUniquePasswordIndexRoute,
  putPoliciesBindingsPolicyBindingUuidIndexRoute,
  putPoliciesDummyPolicyUuidIndexRoute,
  putPoliciesEventMatcherPolicyUuidIndexRoute,
  putPoliciesExpressionPolicyUuidIndexRoute,
  putPoliciesGeoipPolicyUuidIndexRoute,
  putPoliciesPasswordExpiryPolicyUuidIndexRoute,
  putPoliciesPasswordPolicyUuidIndexRoute,
  putPoliciesReputationPolicyUuidIndexRoute,
  putPoliciesUniquePasswordPolicyUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getPoliciesAllIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAllPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesAllPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAllPolicyUuidTestIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAllPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesAllCacheClearIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAllCacheInfoIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesAllTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesBindingsPolicyBindingUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesDummyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesDummyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesDummyPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesDummyPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesDummyPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesDummyPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesDummyPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesEventMatcherIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesEventMatcherIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesEventMatcherPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesEventMatcherPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesEventMatcherPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesEventMatcherPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesEventMatcherPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesExpressionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesExpressionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesExpressionPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesExpressionPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesExpressionPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesExpressionPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesExpressionPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesGeoipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesGeoipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesGeoipPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesGeoipPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesGeoipPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesGeoipPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesGeoipPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesGeoipIso3166IndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesPasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesPasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordExpiryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesPasswordExpiryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordExpiryPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesPasswordExpiryPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesPasswordExpiryPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesPasswordExpiryPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesPasswordExpiryPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesReputationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesReputationPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesReputationPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesReputationPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationScoresIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationScoresReputationUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesReputationScoresReputationUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesReputationScoresReputationUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesUniquePasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoliciesUniquePasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesUniquePasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPoliciesUniquePasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoliciesUniquePasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoliciesUniquePasswordPolicyUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoliciesUniquePasswordPolicyUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

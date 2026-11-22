import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagsTagIdRoute,
  deleteAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRoute,
  deleteAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdContentRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsSkillIdOutputRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRelevanceAggregateRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesSeverityAggregateRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsCategoriesRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRawRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdSkillsRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsIndicatorsRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsSearchRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute,
  getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdTagCategoriesRoute,
  patchAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdRoute,
  patchAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRoute,
  patchAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRoute,
  patchAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdReprocessRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsSkillIdRunRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagsRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsPollRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsRoute,
  postAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsRoute,
  putAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdSkillsRoute,
  putAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdTagCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const threatSignalsHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesRelevanceAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesSeverityAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdReprocessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsSkillIdOutputRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdSkillsSkillIdRunRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdCloudforceOneV2ThreatSignalsArticlesArticleIdTagsTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsPollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneV2ThreatSignalsFeedsFeedIdSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsIndicatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdTagCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneV2ThreatSignalsSkillsSkillIdTagCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })

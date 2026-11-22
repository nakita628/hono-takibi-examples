import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
  getMerchantsMerchantIdSplitConfigurationsRoute,
  getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdRoute,
  postMerchantsMerchantIdSplitConfigurationsRoute,
  postMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const splitConfiguration__merchantLevelHandler = app
  .openapi(getMerchantsMerchantIdSplitConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdSplitConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

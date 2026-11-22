import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1RebalancingPortfoliosPortfolioIdRoute,
  deleteV1RebalancingRunsRunIdRoute,
  deleteV1RebalancingSubscriptionsSubscriptionIdRoute,
  getV1RebalancingPortfoliosPortfolioIdRoute,
  getV1RebalancingPortfoliosRoute,
  getV1RebalancingRunsRoute,
  getV1RebalancingRunsRunIdRoute,
  getV1RebalancingSubscriptionsRoute,
  getV1RebalancingSubscriptionsSubscriptionIdRoute,
  patchV1RebalancingPortfoliosPortfolioIdRoute,
  postV1RebalancingPortfoliosRoute,
  postV1RebalancingRunsRoute,
  postV1RebalancingSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rebalancingHandler = app
  .openapi(getV1RebalancingPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1RebalancingPortfoliosPortfolioIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RebalancingSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1RebalancingSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1RebalancingSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

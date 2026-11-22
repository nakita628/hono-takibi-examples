import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  getLoyaltyBalanceProgramsPidActiveBalanceRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
  getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  getLoyaltyBalanceProgramsPidContactBalancesRoute,
  getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  getLoyaltyBalanceProgramsPidTransactionHistoryRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute,
  postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute,
  postLoyaltyBalanceProgramsPidCreateOrderRoute,
  postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute,
  postLoyaltyBalanceProgramsPidTransactionsRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute,
  postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute,
  putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceHandler = app
  .openapi(getLoyaltyBalanceProgramsPidActiveBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidBalanceDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLoyaltyBalanceProgramsPidBalanceDefinitionsBdidLimitsBlidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidContactBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidCreateOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidSubscriptionsCidBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLoyaltyBalanceProgramsPidTransactionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsTidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLoyaltyBalanceProgramsPidTransactionsTidCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })

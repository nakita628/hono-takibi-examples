import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AccountsAccountIdRoute,
  getV1AccountsActivitiesActivityTypeRoute,
  getV1AccountsActivitiesRoute,
  getV1AccountsOptionsApprovalsRoute,
  getV1AccountsRoute,
  getV1TradingAccountsAccountIdAccountRoute,
  getV2beta1AccountsAccountIdEventsActivitiesEventIdRoute,
  patchV1AccountsAccountIdRoute,
  postV1AccountsAccountIdActionsCloseRoute,
  postV1AccountsAccountIdOptionsApprovalRoute,
  postV1AccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdActionsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdOptionsApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsActivitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsActivitiesActivityTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsOptionsApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TradingAccountsAccountIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2beta1AccountsAccountIdEventsActivitiesEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsIdActionReactionsIdRoute,
  deleteActionsIdRoute,
  getActionsIdActionReactionsIdRoute,
  getActionsIdActionReactionsRoute,
  getActionsIdActionReactionsSummaryRoute,
  getActionsIdBoardRoute,
  getActionsIdCardRoute,
  getActionsIdFieldRoute,
  getActionsIdListRoute,
  getActionsIdMemberCreatorRoute,
  getActionsIdMemberRoute,
  getActionsIdOrganizationRoute,
  getActionsIdRoute,
  postActionsIdActionReactionsRoute,
  putActionsIdRoute,
  putActionsIdTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionsHandler = app
  .openapi(getActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdMemberCreatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putActionsIdTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionsIdActionReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActionsIdActionReactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getActionsIdActionReactionsSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })

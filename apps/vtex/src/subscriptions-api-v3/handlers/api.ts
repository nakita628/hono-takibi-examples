import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiRnsPubSubscriptionsIdItemsItemIdRoute,
  getApiRnsPubCyclesCycleIdRoute,
  getApiRnsPubCyclesRoute,
  getApiRnsPubSubscriptionsIdRoute,
  getApiRnsPubSubscriptionsRoute,
  getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute,
  getApiRnsPvtPlansIdRoute,
  getApiRnsPvtPlansRoute,
  getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute,
  getApiRnsPvtReportsRoute,
  getApiRnsSettingsRoute,
  patchApiRnsPubSubscriptionsIdItemsItemIdRoute,
  patchApiRnsPubSubscriptionsIdRoute,
  postApiRnsPubCyclesCycleIdRetryRoute,
  postApiRnsPubSubscriptionsIdItemsRoute,
  postApiRnsPubSubscriptionsIdSimulateRoute,
  postApiRnsPubSubscriptionsRoute,
  postApiRnsPubSubscriptionsSimulateRoute,
  postApiRnsPvtReportsReportNameDocumentsRoute,
  postApiRnsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiRnsPubCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubCyclesCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubCyclesCycleIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRnsPubSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiRnsPubSubscriptionsIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiRnsPubSubscriptionsIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPubSubscriptionsIdSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtPlansIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsPvtReportsReportNameDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRnsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAlertsAlertIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAccountsAccountIdAdclientsAdClientIdCustomchannelsRoute,
  getAccountsAccountIdAdclientsAdClientIdUrlchannelsRoute,
  getAccountsAccountIdAdclientsRoute,
  getAccountsAccountIdAlertsRoute,
  getAccountsAccountIdPaymentsRoute,
  getAccountsAccountIdReportsRoute,
  getAccountsAccountIdReportsSavedReportIdRoute,
  getAccountsAccountIdReportsSavedRoute,
  getAccountsAccountIdRoute,
  getAccountsAccountIdSavedadstylesRoute,
  getAccountsAccountIdSavedadstylesSavedAdStyleIdRoute,
  getAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAccountsAccountIdAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportsSavedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportsSavedReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSavedadstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdSavedadstylesSavedAdStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })

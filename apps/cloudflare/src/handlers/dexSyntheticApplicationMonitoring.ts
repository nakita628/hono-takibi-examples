import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDexDevicesDexTestsDexTestIdRoute,
  getAccountsAccountIdDexColosRoute,
  getAccountsAccountIdDexDevicesDeviceIdFleetStatusLiveRoute,
  getAccountsAccountIdDexDevicesDeviceIdFleetStatusOverTimeRoute,
  getAccountsAccountIdDexDevicesDeviceIdIspsRoute,
  getAccountsAccountIdDexDevicesDexTestsDexTestIdRoute,
  getAccountsAccountIdDexDevicesDexTestsRoute,
  getAccountsAccountIdDexFleetStatusDevicesRoute,
  getAccountsAccountIdDexFleetStatusLiveRoute,
  getAccountsAccountIdDexFleetStatusOverTimeRoute,
  getAccountsAccountIdDexHttpTestsTestIdPercentilesRoute,
  getAccountsAccountIdDexHttpTestsTestIdRoute,
  getAccountsAccountIdDexTestsOverviewRoute,
  getAccountsAccountIdDexTestsUniqueDevicesRoute,
  getAccountsAccountIdDexTracerouteTestResultsTestResultIdNetworkPathRoute,
  getAccountsAccountIdDexTracerouteTestsTestIdNetworkPathRoute,
  getAccountsAccountIdDexTracerouteTestsTestIdPercentilesRoute,
  getAccountsAccountIdDexTracerouteTestsTestIdRoute,
  postAccountsAccountIdDexDevicesDexTestsRoute,
  putAccountsAccountIdDexDevicesDexTestsDexTestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dexSyntheticApplicationMonitoringHandler = app
  .openapi(getAccountsAccountIdDexColosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexDevicesDexTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDexDevicesDexTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDexDevicesDexTestsDexTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexDevicesDexTestsDexTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDexDevicesDexTestsDexTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexDevicesDeviceIdFleetStatusLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexDevicesDeviceIdFleetStatusOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexDevicesDeviceIdIspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexFleetStatusDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexFleetStatusLiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexFleetStatusOverTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexHttpTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexHttpTestsTestIdPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTestsOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTestsUniqueDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTracerouteTestResultsTestResultIdNetworkPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTracerouteTestsTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTracerouteTestsTestIdNetworkPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDexTracerouteTestsTestIdPercentilesRoute, (c) => {
    throw new Error('Not implemented')
  })

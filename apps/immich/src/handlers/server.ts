import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServerLicenseRoute,
  getServerAboutRoute,
  getServerApkLinksRoute,
  getServerConfigRoute,
  getServerFeaturesRoute,
  getServerLicenseRoute,
  getServerMediaTypesRoute,
  getServerPingRoute,
  getServerStatisticsRoute,
  getServerStorageRoute,
  getServerVersionCheckRoute,
  getServerVersionHistoryRoute,
  getServerVersionRoute,
  putServerLicenseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app
  .openapi(getServerAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerApkLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServerLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServerLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerMediaTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerStorageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerVersionCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServerVersionHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })

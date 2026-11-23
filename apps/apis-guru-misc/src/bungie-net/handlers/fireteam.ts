import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFireteamClanGroupIdActiveCountIndexRoute,
  getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexRoute,
  getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexRoute,
  getFireteamClanGroupIdSummaryFireteamIdIndexRoute,
  getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fireteamHandler = app
  .openapi(getFireteamClanGroupIdActiveCountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getFireteamClanGroupIdAvailablePlatformActivityTypeDateRangeSlotFilterPublicOnlyPageIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getFireteamClanGroupIdMyPlatformIncludeClosedPageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFireteamClanGroupIdSummaryFireteamIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFireteamSearchAvailablePlatformActivityTypeDateRangeSlotFilterPageIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

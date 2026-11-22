import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiScrobblingRemoveErrorIdRoute,
  deleteApiScrobblingRemoveHoldRoute,
  getApiScrobblingExpiredTokensRoute,
  getApiScrobblingHasHoldRoute,
  getApiScrobblingHoldsRoute,
  getApiScrobblingLibraryAllowsScrobblingRoute,
  getApiScrobblingNextScrobbleTimeRoute,
  getApiScrobblingScrobbleErrorsRoute,
  getApiScrobblingScrobbleSettingsRoute,
  getApiScrobblingTokenExpiredRoute,
  postApiScrobblingAddHoldRoute,
  postApiScrobblingBulkRemoveEventsRoute,
  postApiScrobblingClearErrorsRoute,
  postApiScrobblingGenerateScrobbleEventsAllRoute,
  postApiScrobblingGenerateScrobbleEventsRoute,
  postApiScrobblingRetryScrobbleRoute,
  postApiScrobblingScrobbleEventsRoute,
  postApiScrobblingUpdateScrobbleSettingsRoute,
  postApiScrobblingUpdateUserScrobbleProviderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scrobblingHandler = app
  .openapi(getApiScrobblingScrobbleSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingUpdateScrobbleSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingUpdateUserScrobbleProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingGenerateScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingGenerateScrobbleEventsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingTokenExpiredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingExpiredTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingScrobbleErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingClearErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingScrobbleEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingHoldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingHasHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingLibraryAllowsScrobblingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingAddHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScrobblingRemoveHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingBulkRemoveEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiScrobblingRemoveErrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiScrobblingRetryScrobbleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiScrobblingNextScrobbleTimeRoute, (c) => {
    throw new Error('Not implemented')
  })

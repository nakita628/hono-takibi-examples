import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicesHandler,
  getLocationsHandler,
  getOSBrowsersHandler,
  getProfilesHandler,
  getResolutionsHandler,
  getScreenshotsHandler,
  getZippedScreenshotsHandler,
  startScreenshotTestHandler,
  stopScreenshotTestHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', startScreenshotTestHandler)
  .route('/', getDevicesHandler)
  .route('/', getLocationsHandler)
  .route('/', getOSBrowsersHandler)
  .route('/', getProfilesHandler)
  .route('/', getResolutionsHandler)
  .route('/', stopScreenshotTestHandler)
  .route('/', getScreenshotsHandler)
  .route('/', getZippedScreenshotsHandler)

export default app

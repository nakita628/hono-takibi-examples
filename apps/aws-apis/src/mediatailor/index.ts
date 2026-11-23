import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alertsResourceArnHandler,
  channelHandler,
  channelsHandler,
  configureLogsHandler,
  playbackConfigurationHandler,
  playbackConfigurationsHandler,
  prefetchScheduleHandler,
  sourceLocationHandler,
  sourceLocationsHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', configureLogsHandler)
  .route('/', channelHandler)
  .route('/', sourceLocationHandler)
  .route('/', prefetchScheduleHandler)
  .route('/', playbackConfigurationHandler)
  .route('/', alertsResourceArnHandler)
  .route('/', channelsHandler)
  .route('/', playbackConfigurationsHandler)
  .route('/', sourceLocationsHandler)
  .route('/', tagsHandler)

export default app

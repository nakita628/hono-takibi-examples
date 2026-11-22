import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activityEntryApiHandler,
  albumApiHandler,
  artistApiHandler,
  commentApiHandler,
  discussionApiHandler,
  entryApiHandler,
  entryTypesApiHandler,
  pvApiHandler,
  releaseEventApiHandler,
  releaseEventSeriesApiHandler,
  resourcesApiHandler,
  songApiHandler,
  songListApiHandler,
  tagApiHandler,
  userApiHandler,
  venueApiHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', activityEntryApiHandler)
  .route('/', albumApiHandler)
  .route('/', artistApiHandler)
  .route('/', commentApiHandler)
  .route('/', discussionApiHandler)
  .route('/', entryApiHandler)
  .route('/', entryTypesApiHandler)
  .route('/', pvApiHandler)
  .route('/', releaseEventSeriesApiHandler)
  .route('/', releaseEventApiHandler)
  .route('/', resourcesApiHandler)
  .route('/', songListApiHandler)
  .route('/', songApiHandler)
  .route('/', tagApiHandler)
  .route('/', userApiHandler)
  .route('/', venueApiHandler)

export default app

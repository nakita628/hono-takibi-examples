import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  analyticsHandler,
  audioHandler,
  audioLabelsHandler,
  authHandler,
  cameraHandler,
  cameraNameHandler,
  camerasHandler,
  casesHandler,
  categorizedObjectNamesHandler,
  chatHandler,
  classificationHandler,
  configHandler,
  debugReplayHandler,
  descriptionHandler,
  eventIdsHandler,
  eventsHandler,
  exportHandler,
  exportsHandler,
  facesHandler,
  ffmpegHandler,
  ffprobeHandler,
  genaiHandler,
  go2rtcHandler,
  hardwareHandler,
  jobsHandler,
  keyframeAnalysisHandler,
  labelsHandler,
  loginHandler,
  logoutHandler,
  logsHandler,
  lprHandler,
  mediaHandler,
  metricsHandler,
  noticesHandler,
  notificationsHandler,
  nvinfoHandler,
  onvifHandler,
  plusHandler,
  previewHandler,
  profileHandler,
  profilesHandler,
  recognizedLicensePlatesHandler,
  recordingsHandler,
  reindexHandler,
  reolinkHandler,
  restartHandler,
  reviewHandler,
  reviewIdsHandler,
  reviewsHandler,
  statsHandler,
  subLabelsHandler,
  timelineHandler,
  triggerHandler,
  triggersHandler,
  usersHandler,
  vainfoHandler,
  versionHandler,
  vlmHandler,
  vodHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', analyticsHandler)
  .route('/', authHandler)
  .route('/', profileHandler)
  .route('/', logoutHandler)
  .route('/', loginHandler)
  .route('/', usersHandler)
  .route('/', go2rtcHandler)
  .route('/', ffprobeHandler)
  .route('/', keyframeAnalysisHandler)
  .route('/', reolinkHandler)
  .route('/', onvifHandler)
  .route('/', camerasHandler)
  .route('/', cameraHandler)
  .route('/', chatHandler)
  .route('/', vlmHandler)
  .route('/', facesHandler)
  .route('/', lprHandler)
  .route('/', reindexHandler)
  .route('/', audioHandler)
  .route('/', classificationHandler)
  .route('/', reviewHandler)
  .route('/', reviewIdsHandler)
  .route('/', reviewsHandler)
  .route('/', __rootHandler)
  .route('/', configHandler)
  .route('/', versionHandler)
  .route('/', statsHandler)
  .route('/', metricsHandler)
  .route('/', genaiHandler)
  .route('/', profilesHandler)
  .route('/', ffmpegHandler)
  .route('/', vainfoHandler)
  .route('/', nvinfoHandler)
  .route('/', logsHandler)
  .route('/', restartHandler)
  .route('/', mediaHandler)
  .route('/', labelsHandler)
  .route('/', subLabelsHandler)
  .route('/', categorizedObjectNamesHandler)
  .route('/', audioLabelsHandler)
  .route('/', plusHandler)
  .route('/', recognizedLicensePlatesHandler)
  .route('/', timelineHandler)
  .route('/', previewHandler)
  .route('/', notificationsHandler)
  .route('/', exportsHandler)
  .route('/', casesHandler)
  .route('/', jobsHandler)
  .route('/', exportHandler)
  .route('/', hardwareHandler)
  .route('/', noticesHandler)
  .route('/', eventsHandler)
  .route('/', eventIdsHandler)
  .route('/', descriptionHandler)
  .route('/', triggerHandler)
  .route('/', triggersHandler)
  .route('/', cameraNameHandler)
  .route('/', vodHandler)
  .route('/', recordingsHandler)
  .route('/', debugReplayHandler)

export default app

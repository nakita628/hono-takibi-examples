import { OpenAPIHono } from '@hono/zod-openapi'
import {
  analyticsHandler,
  catHandler,
  ccrHandler,
  clusterHandler,
  connectorHandler,
  dataStreamHandler,
  documentHandler,
  enrichHandler,
  eqlHandler,
  esqlHandler,
  featuresHandler,
  fleetHandler,
  graphHandler,
  healthReportHandler,
  ilmHandler,
  indicesHandler,
  inferenceHandler,
  infoHandler,
  ingestHandler,
  licenseHandler,
  logstashHandler,
  migrationHandler,
  mlAnomalyHandler,
  mlDataFrameHandler,
  mlHandler,
  mlTrainedModelHandler,
  prometheusHandler,
  queryRulesHandler,
  reindexHandler,
  rollupHandler,
  scriptHandler,
  searchableSnapshotsHandler,
  searchApplicationHandler,
  searchHandler,
  securityHandler,
  slmHandler,
  snapshotHandler,
  sqlHandler,
  streamsHandler,
  synonymsHandler,
  tasksHandler,
  textStructureHandler,
  transformHandler,
  watcherHandler,
  xpackHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', searchHandler)
  .route('/', documentHandler)
  .route('/', reindexHandler)
  .route('/', catHandler)
  .route('/', ccrHandler)
  .route('/', clusterHandler)
  .route('/', indicesHandler)
  .route('/', connectorHandler)
  .route('/', scriptHandler)
  .route('/', securityHandler)
  .route('/', enrichHandler)
  .route('/', eqlHandler)
  .route('/', esqlHandler)
  .route('/', featuresHandler)
  .route('/', fleetHandler)
  .route('/', graphHandler)
  .route('/', healthReportHandler)
  .route('/', ilmHandler)
  .route('/', migrationHandler)
  .route('/', dataStreamHandler)
  .route('/', inferenceHandler)
  .route('/', infoHandler)
  .route('/', ingestHandler)
  .route('/', licenseHandler)
  .route('/', logstashHandler)
  .route('/', mlTrainedModelHandler)
  .route('/', mlAnomalyHandler)
  .route('/', mlDataFrameHandler)
  .route('/', mlHandler)
  .route('/', prometheusHandler)
  .route('/', queryRulesHandler)
  .route('/', rollupHandler)
  .route('/', searchApplicationHandler)
  .route('/', analyticsHandler)
  .route('/', searchableSnapshotsHandler)
  .route('/', slmHandler)
  .route('/', snapshotHandler)
  .route('/', sqlHandler)
  .route('/', streamsHandler)
  .route('/', synonymsHandler)
  .route('/', tasksHandler)
  .route('/', textStructureHandler)
  .route('/', transformHandler)
  .route('/', watcherHandler)
  .route('/', xpackHandler)

export default app

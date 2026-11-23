import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  aliasesHandler,
  aliasHandler,
  analyzeHandler,
  applicationHandler,
  asyncSearchHandler,
  bulkHandler,
  cacheHandler,
  catHandler,
  ccrHandler,
  clusterHandler,
  componentTemplateHandler,
  connectorHandler,
  countHandler,
  createFromHandler,
  danglingHandler,
  dataStreamHandler,
  deleteByQueryHandler,
  encryptionHandler,
  enrichHandler,
  eqlHandler,
  featuresHandler,
  fieldCapsHandler,
  fleetHandler,
  flushHandler,
  forcemergeHandler,
  healthReportHandler,
  ilmHandler,
  indexHandler,
  indexTemplateHandler,
  inferenceHandler,
  infoHandler,
  ingestHandler,
  licenseHandler,
  lifecycleHandler,
  logstashHandler,
  mappingHandler,
  mgetHandler,
  migrationHandler,
  mlHandler,
  msearchHandler,
  mtermvectorsHandler,
  nodesHandler,
  pitHandler,
  prometheusHandler,
  queryHandler,
  queryRulesHandler,
  rankEvalHandler,
  recoveryHandler,
  refreshHandler,
  reindexHandler,
  remoteHandler,
  renderHandler,
  resolveHandler,
  rollupHandler,
  scriptContextHandler,
  scriptLanguageHandler,
  scriptsHandler,
  searchableSnapshotsHandler,
  searchHandler,
  searchShardsHandler,
  securityHandler,
  segmentsHandler,
  settingsHandler,
  shardStoresHandler,
  slmHandler,
  snapshotHandler,
  sqlHandler,
  sslHandler,
  statsHandler,
  streamsHandler,
  synonymsHandler,
  tasksHandler,
  templateHandler,
  textStructureHandler,
  transformHandler,
  updateByQueryHandler,
  validateHandler,
  watcherHandler,
  xpackHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', asyncSearchHandler)
  .route('/', indexHandler)
  .route('/', bulkHandler)
  .route('/', reindexHandler)
  .route('/', catHandler)
  .route('/', ccrHandler)
  .route('/', searchHandler)
  .route('/', pitHandler)
  .route('/', clusterHandler)
  .route('/', componentTemplateHandler)
  .route('/', infoHandler)
  .route('/', remoteHandler)
  .route('/', connectorHandler)
  .route('/', countHandler)
  .route('/', danglingHandler)
  .route('/', deleteByQueryHandler)
  .route('/', scriptsHandler)
  .route('/', encryptionHandler)
  .route('/', enrichHandler)
  .route('/', eqlHandler)
  .route('/', queryHandler)
  .route('/', featuresHandler)
  .route('/', fieldCapsHandler)
  .route('/', fleetHandler)
  .route('/', scriptContextHandler)
  .route('/', scriptLanguageHandler)
  .route('/', healthReportHandler)
  .route('/', ilmHandler)
  .route('/', analyzeHandler)
  .route('/', migrationHandler)
  .route('/', cacheHandler)
  .route('/', dataStreamHandler)
  .route('/', createFromHandler)
  .route('/', indexTemplateHandler)
  .route('/', templateHandler)
  .route('/', aliasHandler)
  .route('/', flushHandler)
  .route('/', forcemergeHandler)
  .route('/', lifecycleHandler)
  .route('/', mappingHandler)
  .route('/', settingsHandler)
  .route('/', recoveryHandler)
  .route('/', refreshHandler)
  .route('/', resolveHandler)
  .route('/', segmentsHandler)
  .route('/', shardStoresHandler)
  .route('/', statsHandler)
  .route('/', aliasesHandler)
  .route('/', validateHandler)
  .route('/', inferenceHandler)
  .route('/', __rootHandler)
  .route('/', ingestHandler)
  .route('/', licenseHandler)
  .route('/', logstashHandler)
  .route('/', mgetHandler)
  .route('/', mlHandler)
  .route('/', msearchHandler)
  .route('/', mtermvectorsHandler)
  .route('/', nodesHandler)
  .route('/', prometheusHandler)
  .route('/', queryRulesHandler)
  .route('/', rankEvalHandler)
  .route('/', renderHandler)
  .route('/', rollupHandler)
  .route('/', applicationHandler)
  .route('/', searchShardsHandler)
  .route('/', searchableSnapshotsHandler)
  .route('/', snapshotHandler)
  .route('/', securityHandler)
  .route('/', slmHandler)
  .route('/', sqlHandler)
  .route('/', sslHandler)
  .route('/', streamsHandler)
  .route('/', synonymsHandler)
  .route('/', tasksHandler)
  .route('/', textStructureHandler)
  .route('/', transformHandler)
  .route('/', updateByQueryHandler)
  .route('/', watcherHandler)
  .route('/', xpackHandler)

export default app

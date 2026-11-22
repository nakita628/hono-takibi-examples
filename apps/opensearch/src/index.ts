import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  aliasesHandler,
  aliasHandler,
  analyzeHandler,
  bulkHandler,
  cacheHandler,
  catHandler,
  clusterHandler,
  componentTemplateHandler,
  countHandler,
  danglingHandler,
  dataStreamHandler,
  deleteByQueryHandler,
  fieldCapsHandler,
  flushHandler,
  forcemergeHandler,
  indexHandler,
  indexTemplateHandler,
  ingestHandler,
  insightsHandler,
  listHandler,
  ltrHandler,
  mappingHandler,
  mgetHandler,
  msearchHandler,
  mtermvectorsHandler,
  nodesHandler,
  opendistroHandler,
  pluginsHandler,
  rankEvalHandler,
  recoveryHandler,
  refreshHandler,
  reindexHandler,
  remoteHandler,
  remotestoreHandler,
  renderHandler,
  resolveHandler,
  scriptContextHandler,
  scriptLanguageHandler,
  scriptsHandler,
  searchHandler,
  searchShardsHandler,
  segmentsHandler,
  settingsHandler,
  shardStoresHandler,
  snapshotHandler,
  statsHandler,
  tasksHandler,
  templateHandler,
  updateByQueryHandler,
  upgradeHandler,
  validateHandler,
  wlmHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', aliasHandler)
  .route('/', aliasesHandler)
  .route('/', analyzeHandler)
  .route('/', bulkHandler)
  .route('/', cacheHandler)
  .route('/', catHandler)
  .route('/', clusterHandler)
  .route('/', componentTemplateHandler)
  .route('/', countHandler)
  .route('/', danglingHandler)
  .route('/', dataStreamHandler)
  .route('/', deleteByQueryHandler)
  .route('/', fieldCapsHandler)
  .route('/', flushHandler)
  .route('/', forcemergeHandler)
  .route('/', indexTemplateHandler)
  .route('/', ingestHandler)
  .route('/', insightsHandler)
  .route('/', listHandler)
  .route('/', ltrHandler)
  .route('/', mappingHandler)
  .route('/', mgetHandler)
  .route('/', msearchHandler)
  .route('/', mtermvectorsHandler)
  .route('/', nodesHandler)
  .route('/', opendistroHandler)
  .route('/', pluginsHandler)
  .route('/', rankEvalHandler)
  .route('/', recoveryHandler)
  .route('/', refreshHandler)
  .route('/', reindexHandler)
  .route('/', remoteHandler)
  .route('/', remotestoreHandler)
  .route('/', renderHandler)
  .route('/', resolveHandler)
  .route('/', scriptContextHandler)
  .route('/', scriptLanguageHandler)
  .route('/', scriptsHandler)
  .route('/', searchHandler)
  .route('/', searchShardsHandler)
  .route('/', segmentsHandler)
  .route('/', settingsHandler)
  .route('/', shardStoresHandler)
  .route('/', snapshotHandler)
  .route('/', statsHandler)
  .route('/', tasksHandler)
  .route('/', templateHandler)
  .route('/', updateByQueryHandler)
  .route('/', upgradeHandler)
  .route('/', validateHandler)
  .route('/', wlmHandler)
  .route('/', indexHandler)

export default app

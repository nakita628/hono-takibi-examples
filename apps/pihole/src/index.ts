import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionHandler,
  authHandler,
  clientsBatchDeleteHandler,
  clientsHandler,
  configHandler,
  dhcpHandler,
  dnsHandler,
  docsHandler,
  domainsBatchDeleteHandler,
  domainsHandler,
  endpointsHandler,
  groupsBatchDeleteHandler,
  groupsHandler,
  historyHandler,
  infoHandler,
  listsBatchDeleteHandler,
  listsHandler,
  logsHandler,
  networkHandler,
  paddHandler,
  queriesHandler,
  searchHandler,
  statsHandler,
  teleporterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', statsHandler)
  .route('/', historyHandler)
  .route('/', queriesHandler)
  .route('/', dnsHandler)
  .route('/', domainsHandler)
  .route('/', domainsBatchDeleteHandler)
  .route('/', groupsHandler)
  .route('/', groupsBatchDeleteHandler)
  .route('/', clientsHandler)
  .route('/', clientsBatchDeleteHandler)
  .route('/', listsHandler)
  .route('/', listsBatchDeleteHandler)
  .route('/', infoHandler)
  .route('/', logsHandler)
  .route('/', endpointsHandler)
  .route('/', configHandler)
  .route('/', networkHandler)
  .route('/', teleporterHandler)
  .route('/', actionHandler)
  .route('/', dhcpHandler)
  .route('/', searchHandler)
  .route('/', docsHandler)
  .route('/', paddHandler)

export default app

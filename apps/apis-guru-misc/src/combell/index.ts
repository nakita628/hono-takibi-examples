import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  dnsRecordsHandler,
  domainsHandler,
  linuxHostingsHandler,
  mailboxesHandler,
  mailZonesHandler,
  mySqlDatabasesHandler,
  provisioningJobsHandler,
  servicepacksHandler,
  sshHandler,
  sslCertificateRequestsHandler,
  sslCertificatesHandler,
  windowsHostingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', dnsRecordsHandler)
  .route('/', domainsHandler)
  .route('/', linuxHostingsHandler)
  .route('/', mailboxesHandler)
  .route('/', mailZonesHandler)
  .route('/', mySqlDatabasesHandler)
  .route('/', provisioningJobsHandler)
  .route('/', servicepacksHandler)
  .route('/', sshHandler)
  .route('/', sslCertificateRequestsHandler)
  .route('/', sslCertificatesHandler)
  .route('/', windowsHostingsHandler)

export default app

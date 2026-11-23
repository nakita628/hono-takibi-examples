import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  dnsHandler,
  domainsHandler,
  linuxhostingsHandler,
  mailboxesHandler,
  mailzonesHandler,
  mysqldatabasesHandler,
  provisioningjobsHandler,
  servicepacksHandler,
  sshHandler,
  sslcertificaterequestsHandler,
  sslcertificatesHandler,
  windowshostingsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', dnsHandler)
  .route('/', domainsHandler)
  .route('/', linuxhostingsHandler)
  .route('/', mailboxesHandler)
  .route('/', mailzonesHandler)
  .route('/', mysqldatabasesHandler)
  .route('/', provisioningjobsHandler)
  .route('/', servicepacksHandler)
  .route('/', sshHandler)
  .route('/', sslcertificaterequestsHandler)
  .route('/', sslcertificatesHandler)
  .route('/', windowshostingsHandler)

export default app

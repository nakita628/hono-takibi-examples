import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessHandler,
  agentHandler,
  coapHandler,
  daemonHandler,
  dhcpHandler,
  ipmiHandler,
  mqttHandler,
  netflowHandler,
  proxyHandler,
  sflowHandler,
  snmptcpHandler,
  snmPv3Handler,
  sshHandler,
  syslogHandler,
  telnetHandler,
  tftpHandler,
  todHandler,
  valuespaceHandler,
  webHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accessHandler)
  .route('/', agentHandler)
  .route('/', coapHandler)
  .route('/', dhcpHandler)
  .route('/', ipmiHandler)
  .route('/', mqttHandler)
  .route('/', netflowHandler)
  .route('/', proxyHandler)
  .route('/', sflowHandler)
  .route('/', snmptcpHandler)
  .route('/', snmPv3Handler)
  .route('/', sshHandler)
  .route('/', syslogHandler)
  .route('/', telnetHandler)
  .route('/', tftpHandler)
  .route('/', todHandler)
  .route('/', webHandler)
  .route('/', valuespaceHandler)
  .route('/', daemonHandler)

export default app

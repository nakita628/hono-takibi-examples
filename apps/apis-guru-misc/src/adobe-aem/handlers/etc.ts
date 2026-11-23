import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEtcReplicationAgentsRunmodeNameRoute,
  getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRoute,
  getEtcPackagesGroupNameVersionZipRoute,
  getEtcReplicationAgentsRunmode1JsonRoute,
  getEtcReplicationAgentsRunmodeNameRoute,
  getEtcTruststoreTruststoreP12Route,
  postEtcReplicationAgentsRunmodeNameRoute,
  postEtcTruststoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const etcHandler = app
  .openapi(getEtcPackagesGroupNameVersionZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtcPackagesGroupNameVersionZipJcrContentVltDefinitionFilterTidy2JsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtcReplicationAgentsRunmode1JsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEtcReplicationAgentsRunmodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtcReplicationAgentsRunmodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEtcReplicationAgentsRunmodeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEtcTruststoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtcTruststoreTruststoreP12Route, (c) => {
    throw new Error('Not implemented')
  })

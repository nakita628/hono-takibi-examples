import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AutnumAutnumIdRoute,
  getV1DomainDomainNameRoute,
  getV1DomainsRoute,
  getV1EntitiesRoute,
  getV1EntityEntityIdRoute,
  getV1HelpRoute,
  getV1IpIpIdIpId1Route,
  getV1IpRoute,
  getV1NameserverNameserverIdRoute,
  getV1NameserversRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AutnumAutnumIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntityEntityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HelpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IpIpIdIpId1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameserverNameserverIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameserversRoute, (c) => {
    throw new Error('Not implemented')
  })

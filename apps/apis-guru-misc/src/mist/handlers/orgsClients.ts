import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdClientsCountRoute,
  getApiV1OrgsOrgIdClientsEventsSearchRoute,
  getApiV1OrgsOrgIdClientsSearchRoute,
  getApiV1OrgsOrgIdClientsSessionsCountRoute,
  getApiV1OrgsOrgIdClientsSessionsSearchRoute,
  getApiV1OrgsOrgIdWiredClientsCountRoute,
  getApiV1OrgsOrgIdWiredClientsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsClientsHandler = app
  .openapi(getApiV1OrgsOrgIdClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSessionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdClientsSessionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWiredClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWiredClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })

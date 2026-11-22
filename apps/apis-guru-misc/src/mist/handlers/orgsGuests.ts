import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdGuestsGuestMacRoute,
  getApiV1OrgsOrgIdGuestsCountRoute,
  getApiV1OrgsOrgIdGuestsGuestMacRoute,
  getApiV1OrgsOrgIdGuestsRoute,
  getApiV1OrgsOrgIdGuestsSearchRoute,
  putApiV1OrgsOrgIdGuestsGuestMacRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsGuestsHandler = app
  .openapi(getApiV1OrgsOrgIdGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })

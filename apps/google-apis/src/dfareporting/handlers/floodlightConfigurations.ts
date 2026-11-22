import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdFloodlightConfigurationsIdRoute,
  getUserprofilesProfileIdFloodlightConfigurationsRoute,
  patchUserprofilesProfileIdFloodlightConfigurationsRoute,
  putUserprofilesProfileIdFloodlightConfigurationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const floodlightConfigurationsHandler = app
  .openapi(getUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdFloodlightConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdFloodlightConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

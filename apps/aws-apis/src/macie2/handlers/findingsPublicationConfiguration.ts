import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFindingsPublicationConfigurationRoute,
  putFindingsPublicationConfigurationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const findingsPublicationConfigurationHandler = app
  .openapi(getFindingsPublicationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFindingsPublicationConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })

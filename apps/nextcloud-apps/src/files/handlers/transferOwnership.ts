import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
  postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute,
  postOcsV2PhpAppsFilesApiV1TransferownershipRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferOwnershipHandler = app
  .openapi(postOcsV2PhpAppsFilesApiV1TransferownershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsFilesApiV1TransferownershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsFilesApiV1TransferownershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute,
  getApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute,
  getApiV2LogsConfigCustomDestinationsRoute,
  patchApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute,
  postApiV2LogsConfigCustomDestinationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsCustomDestinationsHandler = app
  .openapi(getApiV2LogsConfigCustomDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LogsConfigCustomDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2LogsConfigCustomDestinationsCustomDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

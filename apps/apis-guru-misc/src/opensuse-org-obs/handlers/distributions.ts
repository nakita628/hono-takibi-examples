import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDistributionsDistributionIdRoute,
  getDistributionsDistributionIdRoute,
  getDistributionsIncludeRemotesRoute,
  getDistributionsRoute,
  postDistributionsRoute,
  putDistributionsBulkReplaceRoute,
  putDistributionsDistributionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const distributionsHandler = app
  .openapi(getDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDistributionsBulkReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistributionsIncludeRemotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDistributionsDistributionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDistributionsDistributionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDistributionsDistributionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

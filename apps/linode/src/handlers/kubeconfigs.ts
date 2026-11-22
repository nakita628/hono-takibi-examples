import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionLkeClustersClusterIdKubeconfigRoute,
  getApiVersionLkeClustersClusterIdKubeconfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const kubeconfigsHandler = app
  .openapi(getApiVersionLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionLkeClustersClusterIdKubeconfigRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestServicedeskapiAssetsWorkspaceRoute,
  getRestServicedeskapiInsightWorkspaceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(getRestServicedeskapiAssetsWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiInsightWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })

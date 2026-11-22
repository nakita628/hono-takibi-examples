import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVirtualCrossConnectsIdRoute,
  getVirtualCrossConnectsCoverage2Route,
  getVirtualCrossConnectsCoverageRoute,
  getVirtualCrossConnectsIdRoute,
  getVirtualCrossConnectsRoute,
  patchVirtualCrossConnectsIdRoute,
  postVirtualCrossConnectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualCrossConnectsHandler = app
  .openapi(getVirtualCrossConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualCrossConnectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCrossConnectsCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVirtualCrossConnectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCrossConnectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVirtualCrossConnectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualCrossConnectsCoverage2Route, (c) => {
    throw new Error('Not implemented')
  })

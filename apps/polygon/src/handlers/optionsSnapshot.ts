import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3SnapshotOptionsUnderlyingAssetOptionContractRoute,
  getV3SnapshotOptionsUnderlyingAssetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const optionsSnapshotHandler = app
  .openapi(getV3SnapshotOptionsUnderlyingAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3SnapshotOptionsUnderlyingAssetOptionContractRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AssetlinksCheckRoute,
  getV1StatementsListRoute,
  postV1AssetlinksBulkCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AssetlinksBulkCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AssetlinksCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StatementsListRoute, (c) => {
    throw new Error('Not implemented')
  })

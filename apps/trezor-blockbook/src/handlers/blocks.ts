import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2BlockBlockIdRoute,
  getApiV2BlockFiltersIndexRoute,
  getApiV2BlockIndexHeightRoute,
  getApiV2RawblockBlockIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocksHandler = app
  .openapi(getApiV2BlockIndexHeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RawblockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BlockFiltersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DebugParentItemsForunmappedidentityRoute,
  getV1DebugParentUnmappedidsRoute,
  postV1DebugNameCheckAccessRoute,
  postV1DebugNameItemsSearchByViewUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app
  .openapi(postV1DebugNameItemsSearchByViewUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DebugNameCheckAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebugParentItemsForunmappedidentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DebugParentUnmappedidsRoute, (c) => {
    throw new Error('Not implemented')
  })

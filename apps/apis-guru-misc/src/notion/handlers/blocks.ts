import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BlocksIdRoute,
  getV1BlocksIdChildrenRoute,
  getV1BlocksIdRoute,
  patchV1BlocksIdChildrenRoute,
  patchV1BlocksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blocksHandler = app
  .openapi(deleteV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BlocksIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BlocksIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })

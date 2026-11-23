import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBinIdRoute,
  getBinIdRoute,
  patchBinIdRoute,
  postBinRoute,
  putBinIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const binHandler = app
  .openapi(postBinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBinIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBinIdRoute, (c) => {
    throw new Error('Not implemented')
  })

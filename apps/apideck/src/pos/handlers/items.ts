import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePosItemsIdRoute,
  getPosItemsIdRoute,
  getPosItemsRoute,
  patchPosItemsIdRoute,
  postPosItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getPosItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPosItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPosItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionAccountEntityTransfersTokenRoute,
  getApiVersionAccountEntityTransfersRoute,
  getApiVersionAccountEntityTransfersTokenRoute,
  postApiVersionAccountEntityTransfersRoute,
  postApiVersionAccountEntityTransfersTokenAcceptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const entityTransfersHandler = app
  .openapi(postApiVersionAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEntityTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountEntityTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountEntityTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })

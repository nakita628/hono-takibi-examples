import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionAccountServiceTransfersTokenRoute,
  getApiVersionAccountServiceTransfersRoute,
  getApiVersionAccountServiceTransfersTokenRoute,
  postApiVersionAccountServiceTransfersRoute,
  postApiVersionAccountServiceTransfersTokenAcceptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceTransfersHandler = app
  .openapi(postApiVersionAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountServiceTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionAccountServiceTransfersTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiVersionAccountServiceTransfersTokenAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })

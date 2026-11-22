import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
  getV2BusinessAccountsDraftTransfersDraftTransferIdRoute,
  getV2BusinessAccountsDraftTransfersRoute,
  postV2BusinessAccountsDraftTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const draftTransfersAPIHandler = app
  .openapi(postV2BusinessAccountsDraftTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsDraftTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BusinessAccountsDraftTransfersDraftTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2BusinessAccountsDraftTransfersDraftTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })

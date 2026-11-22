import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })

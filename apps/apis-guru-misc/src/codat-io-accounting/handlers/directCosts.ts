import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directCostsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectCostsDirectCostIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsDirectCostIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

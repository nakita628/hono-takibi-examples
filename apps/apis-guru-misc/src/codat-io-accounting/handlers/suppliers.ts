import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRoute,
  getCompaniesCompanyIdDataSuppliersRoute,
  getCompaniesCompanyIdDataSuppliersSupplierIdRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppliersHandler = app
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataSuppliersSupplierIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSuppliersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataSuppliersSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })

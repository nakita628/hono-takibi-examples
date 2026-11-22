import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRoute,
  getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRoute,
  getCompaniesCompanyIdDataInvoicesInvoiceIdRoute,
  getCompaniesCompanyIdDataInvoicesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const invoicesHandler = app
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataInvoicesInvoiceIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushInvoicesInvoiceIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdDataInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataInvoicesInvoiceIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRoute,
  getCompaniesCompanyIdDataBillsBillIdRoute,
  getCompaniesCompanyIdDataBillsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushBillsRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataBillsBillIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushBillsBillIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataBillsBillIdRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directIncomesHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataDirectIncomesDirectIncomeIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postCompaniesCompanyIdConnectionsConnectionIdPushDirectIncomesDirectIncomeIdAttachmentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

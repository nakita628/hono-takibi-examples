import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRoute,
  getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRoute,
  getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRoute,
  getCompaniesCompanyIdDataCustomersCustomerIdRoute,
  getCompaniesCompanyIdDataCustomersRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRoute,
  putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customersHandler = app
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCompaniesCompanyIdConnectionsConnectionIdDataCustomersCustomerIdAttachmentsAttachmentIdDownloadRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })

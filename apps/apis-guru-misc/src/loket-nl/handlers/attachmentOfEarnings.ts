import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
  getProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearningsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearningsRoute,
  putProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attachmentOfEarningsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsAttachmentsofearningsAttachmentOfEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdAttachmentsofearningsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609InvoicesInvoiceIdRoute,
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRoute,
  getCrmObjects202609InvoicesInvoiceIdRoute,
  getCrmObjects202609InvoicesRoute,
  patchCrmObjects202609InvoicesInvoiceIdRoute,
  postCrmObjects202609InvoicesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609InvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609InvoicesInvoiceIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
    (c) => {},
  )

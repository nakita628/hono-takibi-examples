import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
  deleteCrmObjects202609QuotesQuoteIdRoute,
  getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRoute,
  getCrmObjects202609QuotesQuoteIdRoute,
  getCrmObjects202609QuotesRoute,
  patchCrmObjects202609QuotesQuoteIdRoute,
  postCrmObjects202609QuotesRoute,
  putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmObjects202609QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609QuotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCrmObjects202609QuotesQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmObjects202609QuotesQuoteIdAssociationsToObjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmObjects202609ObjectTypeObjectIdAssociationsToObjectTypeToObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })

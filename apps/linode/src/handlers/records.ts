import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionDomainsDomainIdRecordsRecordIdRoute,
  getApiVersionDomainsDomainIdRecordsRecordIdRoute,
  getApiVersionDomainsDomainIdRecordsRoute,
  postApiVersionDomainsDomainIdRecordsRoute,
  putApiVersionDomainsDomainIdRecordsRecordIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(postApiVersionDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionDomainsDomainIdRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })

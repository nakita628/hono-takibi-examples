import { OpenAPIHono } from '@hono/zod-openapi'
import { getDomainsRecordsRecordIdRoute, putDomainsDomainRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const domainsHandler = app
  .openapi(putDomainsDomainRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDomainsRecordsRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })

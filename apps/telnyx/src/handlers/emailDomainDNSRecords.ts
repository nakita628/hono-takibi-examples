import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEmailDomainsDomainIdDnsRecordsRoute,
  postEmailDomainsDomainIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailDomainDNSRecordsHandler = app
  .openapi(getEmailDomainsDomainIdDnsRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailDomainsDomainIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })

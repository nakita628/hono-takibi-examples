import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmtpBlockedContactsEmailRoute,
  deleteSmtpBlockedDomainsDomainRoute,
  deleteSmtpEmailIdentifierRoute,
  deleteSmtpLogIdentifierRoute,
  deleteSmtpTemplatesTemplateIdRoute,
  getSmtpBlockedContactsRoute,
  getSmtpBlockedDomainsRoute,
  getSmtpEmailsRoute,
  getSmtpEmailStatusIdentifierRoute,
  getSmtpEmailsUuidRoute,
  getSmtpStatisticsAggregatedReportRoute,
  getSmtpStatisticsEventsRoute,
  getSmtpStatisticsReportsRoute,
  getSmtpTemplatesRoute,
  getSmtpTemplatesTemplateIdRoute,
  postSmtpBlockedDomainsRoute,
  postSmtpDeleteHardbouncesRoute,
  postSmtpEmailRoute,
  postSmtpTemplatePreviewRoute,
  postSmtpTemplatesRoute,
  postSmtpTemplatesTemplateIdSendTestRoute,
  putSmtpTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionalEmailsHandler = app
  .openapi(getSmtpBlockedContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmtpBlockedContactsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpBlockedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpBlockedDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmtpBlockedDomainsDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpDeleteHardbouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmtpEmailIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpEmailStatusIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpEmailsUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmtpLogIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpStatisticsAggregatedReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpStatisticsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpStatisticsReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpTemplatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmtpTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmtpTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmtpTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmtpTemplatesTemplateIdSendTestRoute, (c) => {
    throw new Error('Not implemented')
  })

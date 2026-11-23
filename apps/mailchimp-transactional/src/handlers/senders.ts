import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postSendersAddDomainRoute,
  postSendersCheckDomainRoute,
  postSendersDeleteDomainRoute,
  postSendersDomainsRoute,
  postSendersInfoRoute,
  postSendersListRoute,
  postSendersTimeSeriesRoute,
  postSendersVerifyDomainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sendersHandler = app
  .openapi(postSendersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersAddDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersCheckDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersVerifyDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSendersDeleteDomainRoute, (c) => {
    throw new Error('Not implemented')
  })

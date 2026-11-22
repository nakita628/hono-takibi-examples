import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1DomainVerificationsCheckRoute,
  postV1DomainVerificationsCreateRoute,
  postV1DomainVerificationsDeleteRoute,
  postV1DomainVerificationsListPendingRoute,
  postV1DomainVerificationsListRoute,
  postV1DomainVerificationsResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const domainVerificationsHandler = app
  .openapi(postV1DomainVerificationsListPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DomainVerificationsResetRoute, (c) => {
    throw new Error('Not implemented')
  })

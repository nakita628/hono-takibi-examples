import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ApplicationsIdRoute,
  deleteApiV4UserApplicationsIdRoute,
  getApiV4ApplicationsRoute,
  getApiV4UserApplicationsIdRoute,
  getApiV4UserApplicationsRoute,
  postApiV4ApplicationsIdRenewSecretRoute,
  postApiV4ApplicationsRoute,
  postApiV4UserApplicationsRoute,
  putApiV4UserApplicationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postApiV4UserApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UserApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4UserApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ApplicationsIdRenewSecretRoute, (c) => {
    throw new Error('Not implemented')
  })

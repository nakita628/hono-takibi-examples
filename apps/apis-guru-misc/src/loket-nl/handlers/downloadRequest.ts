import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersUsersDownloadrequestsDownloadRequestIdRoute,
  getProvidersEmployersUsersDownloadrequestsDownloadRequestIdFileRoute,
  getProvidersEmployersUsersDownloadrequestsDownloadRequestIdRoute,
  getProvidersEmployersUsersDownloadrequestsRoute,
  postProvidersEmployersUsersDownloadrequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const downloadRequestHandler = app
  .openapi(getProvidersEmployersUsersDownloadrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersUsersDownloadrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersUsersDownloadrequestsDownloadRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersUsersDownloadrequestsDownloadRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersUsersDownloadrequestsDownloadRequestIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProviderExternalIdApplicationsApplicationIdRoute,
  postProviderExternalIdApplicationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app
  .openapi(postProviderExternalIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProviderExternalIdApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })

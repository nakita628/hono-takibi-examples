import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute,
  getTenantIDApplicationsApplicationObjectIdOwnersRoute,
  postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationOwnersHandler = app
  .openapi(postTenantIDApplicationsApplicationObjectIdLinksOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDApplicationsApplicationObjectIdLinksOwnersOwnerObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDApplicationsApplicationObjectIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })

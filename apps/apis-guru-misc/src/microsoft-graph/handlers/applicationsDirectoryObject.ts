import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute,
  getApplicationsApplicationIdCreatedOnBehalfOfRoute,
  getApplicationsApplicationIdOwnersRefRoute,
  getApplicationsApplicationIdOwnersRoute,
  postApplicationsApplicationIdOwnersRefRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsDirectoryObjectHandler = app
  .openapi(getApplicationsApplicationIdCreatedOnBehalfOfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApplicationsApplicationIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApplicationsApplicationIdOwnersRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApplicationsApplicationIdOwnersDirectoryObjectIdRefRoute, (c) => {
    throw new Error('Not implemented')
  })

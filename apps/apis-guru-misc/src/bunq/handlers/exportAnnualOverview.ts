import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserUserIDExportAnnualOverviewItemIdRoute,
  getUserUserIDExportAnnualOverviewItemIdRoute,
  getUserUserIDExportAnnualOverviewRoute,
  postUserUserIDExportAnnualOverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportAnnualOverviewHandler = app
  .openapi(getUserUserIDExportAnnualOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDExportAnnualOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIDExportAnnualOverviewItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDExportAnnualOverviewItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

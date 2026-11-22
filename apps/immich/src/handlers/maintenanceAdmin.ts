import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminIntegrityReportIdRoute,
  getAdminIntegrityReportIdFileRoute,
  getAdminIntegrityReportRoute,
  getAdminIntegrityReportTypeCsvRoute,
  getAdminIntegritySummaryRoute,
  getAdminMaintenanceDetectInstallRoute,
  getAdminMaintenanceStatusRoute,
  postAdminMaintenanceLoginRoute,
  postAdminMaintenanceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const maintenanceAdminHandler = app
  .openapi(getAdminIntegrityReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminIntegrityReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegrityReportIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegrityReportTypeCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIntegritySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMaintenanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMaintenanceDetectInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminMaintenanceLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminMaintenanceStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

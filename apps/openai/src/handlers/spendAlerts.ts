import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  deleteOrganizationSpendAlertsAlertIdRoute,
  getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  getOrganizationProjectsProjectIdSpendAlertsRoute,
  getOrganizationSpendAlertsAlertIdRoute,
  getOrganizationSpendAlertsRoute,
  postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute,
  postOrganizationProjectsProjectIdSpendAlertsRoute,
  postOrganizationSpendAlertsAlertIdRoute,
  postOrganizationSpendAlertsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spendAlertsHandler = app
  .openapi(getOrganizationProjectsProjectIdSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationProjectsProjectIdSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationSpendAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })

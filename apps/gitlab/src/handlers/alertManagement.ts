import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageIdRoute,
  getApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesRoute,
  postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesAuthorizeRoute,
  postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesRoute,
  putApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const alertManagementHandler = app
  .openapi(postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

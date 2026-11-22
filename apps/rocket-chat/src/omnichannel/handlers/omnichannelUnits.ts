import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1LivechatUnitsIdRoute,
  getApiV1LivechatUnitsIdRoute,
  getApiV1LivechatUnitsRoute,
  getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute,
  getApiV1LivechatUnitsUnitIdDepartmentsRoute,
  getApiV1LivechatUnitsUnitIdMonitorsRoute,
  postApiV1LivechatUnitsIdRoute,
  postApiV1LivechatUnitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelUnitsHandler = app
  .openapi(postApiV1LivechatUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatUnitsUnitIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  deleteSettingsOrganizationsOrganizationNameRoute,
  deleteSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
  getSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  getSettingsOrganizationsOrganizationNameReceiversRoute,
  getSettingsOrganizationsOrganizationNameRoute,
  getSettingsOrganizationsOrganizationNameSendersRoute,
  getSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
  getSettingsOrganizationsRoute,
  headSettingsOrganizationsRoute,
  postReportsRoute,
  putSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
  putSettingsOrganizationsOrganizationNameRoute,
  putSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
} from './routes'
import {
  deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  deleteSettingsOrganizationsOrganizationNameRouteHandler,
  deleteSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
  getSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  getSettingsOrganizationsOrganizationNameReceiversRouteHandler,
  getSettingsOrganizationsOrganizationNameRouteHandler,
  getSettingsOrganizationsOrganizationNameSendersRouteHandler,
  getSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
  getSettingsOrganizationsRouteHandler,
  headSettingsOrganizationsRouteHandler,
  postReportsRouteHandler,
  putSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  putSettingsOrganizationsOrganizationNameRouteHandler,
  putSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postReportsRoute, postReportsRouteHandler)
  .openapi(getSettingsOrganizationsRoute, getSettingsOrganizationsRouteHandler)
  .openapi(headSettingsOrganizationsRoute, headSettingsOrganizationsRouteHandler)
  .openapi(
    deleteSettingsOrganizationsOrganizationNameRoute,
    deleteSettingsOrganizationsOrganizationNameRouteHandler,
  )
  .openapi(
    getSettingsOrganizationsOrganizationNameRoute,
    getSettingsOrganizationsOrganizationNameRouteHandler,
  )
  .openapi(
    putSettingsOrganizationsOrganizationNameRoute,
    putSettingsOrganizationsOrganizationNameRouteHandler,
  )
  .openapi(
    getSettingsOrganizationsOrganizationNameReceiversRoute,
    getSettingsOrganizationsOrganizationNameReceiversRouteHandler,
  )
  .openapi(
    deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
    deleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  )
  .openapi(
    getSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
    getSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  )
  .openapi(
    putSettingsOrganizationsOrganizationNameReceiversReceiverNameRoute,
    putSettingsOrganizationsOrganizationNameReceiversReceiverNameRouteHandler,
  )
  .openapi(
    getSettingsOrganizationsOrganizationNameSendersRoute,
    getSettingsOrganizationsOrganizationNameSendersRouteHandler,
  )
  .openapi(
    deleteSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
    deleteSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
  )
  .openapi(
    getSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
    getSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
  )
  .openapi(
    putSettingsOrganizationsOrganizationNameSendersSenderNameRoute,
    putSettingsOrganizationsOrganizationNameSendersSenderNameRouteHandler,
  )

export default app

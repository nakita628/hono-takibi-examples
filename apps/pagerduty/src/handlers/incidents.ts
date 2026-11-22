import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIncidentsIdNotesNoteIdRoute,
  getIncidentsIdAlertsAlertIdRoute,
  getIncidentsIdAlertsRoute,
  getIncidentsIdBusinessServicesImpactsRoute,
  getIncidentsIdCustomFieldsValuesRoute,
  getIncidentsIdLogEntriesRoute,
  getIncidentsIdNotesRoute,
  getIncidentsIdOutlierIncidentRoute,
  getIncidentsIdPastIncidentsRoute,
  getIncidentsIdRelatedIncidentsRoute,
  getIncidentsIdRoute,
  getIncidentsIdScribeTranscriptsRoute,
  getIncidentsIdStatusUpdatesSubscribersRoute,
  getIncidentsRoute,
  postIncidentsIdNotesRoute,
  postIncidentsIdResponderRequestsRoute,
  postIncidentsIdSnoozeRoute,
  postIncidentsIdStatusUpdatesRoute,
  postIncidentsIdStatusUpdatesSubscribersRoute,
  postIncidentsIdStatusUpdatesUnsubscribeRoute,
  postIncidentsRoute,
  putIncidentsIdAlertsAlertIdRoute,
  putIncidentsIdAlertsRoute,
  putIncidentsIdBusinessServicesBusinessServiceIdImpactsRoute,
  putIncidentsIdCustomFieldsValuesRoute,
  putIncidentsIdMergeRoute,
  putIncidentsIdNotesNoteIdRoute,
  putIncidentsIdResponderRequestsCancelRoute,
  putIncidentsIdRoute,
  putIncidentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const incidentsHandler = app
  .openapi(getIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdAlertsAlertIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdBusinessServicesBusinessServiceIdImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdBusinessServicesImpactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdCustomFieldsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdCustomFieldsValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdLogEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsIdNotesNoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdOutlierIncidentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdPastIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdRelatedIncidentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdResponderRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdResponderRequestsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdScribeTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdSnoozeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdStatusUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdStatusUpdatesSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdStatusUpdatesSubscribersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdStatusUpdatesUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })

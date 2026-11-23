import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteIncidentsCustomFieldsFieldIdRoute,
  deleteIncidentsIdNotesNoteIdRoute,
  deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  getIncidentsCustomFieldsFieldIdFieldOptionsRoute,
  getIncidentsCustomFieldsFieldIdRoute,
  getIncidentsCustomFieldsRoute,
  getIncidentsIdAlertsAlertIdRoute,
  getIncidentsIdAlertsRoute,
  getIncidentsIdBusinessServicesImpactsRoute,
  getIncidentsIdCustomFieldsValuesRoute,
  getIncidentsIdLogEntriesRoute,
  getIncidentsIdNotesRoute,
  getIncidentsIdOutlierIncidentRoute,
  getIncidentsIdPastIncidentsRoute,
  getIncidentsIdRelatedChangeEventsRoute,
  getIncidentsIdRelatedIncidentsRoute,
  getIncidentsIdReviewActionItemsRoute,
  getIncidentsIdReviewRoute,
  getIncidentsIdRoute,
  getIncidentsIdScribeTranscriptsRoute,
  getIncidentsIdStatusUpdatesSubscribersRoute,
  getIncidentsReviewsActionItemsRoute,
  getIncidentsReviewsRoute,
  getIncidentsRoute,
  getIncidentsTypesRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  getIncidentsTypesTypeIdOrNameCustomFieldsRoute,
  getIncidentsTypesTypeIdOrNameRoute,
  postIncidentsCustomFieldsFieldIdFieldOptionsRoute,
  postIncidentsCustomFieldsRoute,
  postIncidentsIdNotesRoute,
  postIncidentsIdResponderRequestsRoute,
  postIncidentsIdReviewMarkersRoute,
  postIncidentsIdReviewRoute,
  postIncidentsIdSnoozeRoute,
  postIncidentsIdStatusUpdatesRoute,
  postIncidentsIdStatusUpdatesSubscribersRoute,
  postIncidentsIdStatusUpdatesUnsubscribeRoute,
  postIncidentsRoute,
  postIncidentsTypesRoute,
  postIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute,
  postIncidentsTypesTypeIdOrNameCustomFieldsRoute,
  putIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putIncidentsCustomFieldsFieldIdRoute,
  putIncidentsIdAlertsAlertIdRoute,
  putIncidentsIdAlertsRoute,
  putIncidentsIdBusinessServicesBusinessServiceIdImpactsRoute,
  putIncidentsIdCustomFieldsValuesRoute,
  putIncidentsIdMergeRoute,
  putIncidentsIdNotesNoteIdRoute,
  putIncidentsIdResponderRequestsCancelRoute,
  putIncidentsIdReviewRoute,
  putIncidentsIdRoute,
  putIncidentsRoute,
  putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
  putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute,
  putIncidentsTypesTypeIdOrNameRoute,
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
  .openapi(getIncidentsIdRelatedChangeEventsRoute, (c) => {
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
  .openapi(getIncidentsReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsReviewsActionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsIdReviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsIdReviewActionItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsIdReviewMarkersRoute, (c) => {
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
  .openapi(getIncidentsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesTypeIdOrNameCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIncidentsTypesTypeIdOrNameCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postIncidentsCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsCustomFieldsFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIncidentsCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncidentsCustomFieldsFieldIdFieldOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIncidentsCustomFieldsFieldIdFieldOptionsFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

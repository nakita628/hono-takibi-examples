import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactdbCustomFieldsCustomFieldIdRoute,
  deleteContactdbListsListIdRecipientsRecipientIdRoute,
  deleteContactdbListsListIdRoute,
  deleteContactdbListsRoute,
  deleteContactdbRecipientsRecipientIdRoute,
  deleteContactdbRecipientsRoute,
  deleteContactdbSegmentsSegmentIdRoute,
  getContactdbCustomFieldsCustomFieldIdRoute,
  getContactdbCustomFieldsRoute,
  getContactdbListsListIdRecipientsRoute,
  getContactdbListsListIdRoute,
  getContactdbListsRoute,
  getContactdbRecipientsBillableCountRoute,
  getContactdbRecipientsCountRoute,
  getContactdbRecipientsRecipientIdListsRoute,
  getContactdbRecipientsRecipientIdRoute,
  getContactdbRecipientsRoute,
  getContactdbRecipientsSearchRoute,
  getContactdbReservedFieldsRoute,
  getContactdbSegmentsRoute,
  getContactdbSegmentsSegmentIdRecipientsRoute,
  getContactdbSegmentsSegmentIdRoute,
  getContactdbStatusRoute,
  patchContactdbListsListIdRoute,
  patchContactdbRecipientsRoute,
  patchContactdbSegmentsSegmentIdRoute,
  postContactdbCustomFieldsRoute,
  postContactdbListsListIdRecipientsRecipientIdRoute,
  postContactdbListsListIdRecipientsRoute,
  postContactdbListsRoute,
  postContactdbRecipientsRoute,
  postContactdbRecipientsSearchRoute,
  postContactdbSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactdbHandler = app
  .openapi(getContactdbCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbCustomFieldsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbListsListIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsListIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbListsListIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbListsListIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsBillableCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbRecipientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbRecipientsRecipientIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbReservedFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactdbSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchContactdbSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbSegmentsSegmentIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactdbStatusRoute, (c) => {
    throw new Error('Not implemented')
  })

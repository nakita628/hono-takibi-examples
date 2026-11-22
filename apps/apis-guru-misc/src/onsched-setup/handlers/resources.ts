import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1ResourcesAllocationsIdRoute,
  deleteSetupV1ResourcesBlockIdRoute,
  deleteSetupV1ResourcesIdDeleteimageRoute,
  deleteSetupV1ResourcesIdRoute,
  deleteSetupV1ResourcesIdServicesRoute,
  getSetupV1ResourcesAllocationsIdRoute,
  getSetupV1ResourcesBlocksIdRoute,
  getSetupV1ResourcesIdAllocationsRoute,
  getSetupV1ResourcesIdAvailabilityRoute,
  getSetupV1ResourcesIdBlocksRoute,
  getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute,
  getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute,
  getSetupV1ResourcesIdRoute,
  getSetupV1ResourcesRoute,
  getSetupV1ResourcesTimezonesRoute,
  postSetupV1ResourcesBulkRoute,
  postSetupV1ResourcesIdAllocationsRoute,
  postSetupV1ResourcesIdBlockRoute,
  postSetupV1ResourcesIdServicesRoute,
  postSetupV1ResourcesIdUploadimageRoute,
  postSetupV1ResourcesRoute,
  putSetupV1ResourcesAllocationsIdRoute,
  putSetupV1ResourcesBlockIdRoute,
  putSetupV1ResourcesBulkRoute,
  putSetupV1ResourcesIdAvailabilityRoute,
  putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute,
  putSetupV1ResourcesIdRecoverRoute,
  putSetupV1ResourcesIdRoute,
  putSetupV1ResourcesIdServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getSetupV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesTimezonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdCalendarAuthGoogleGoogleEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ResourcesIdCalendarAuthOutlookOutlookEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdReassignAppointmentsResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ResourcesIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })

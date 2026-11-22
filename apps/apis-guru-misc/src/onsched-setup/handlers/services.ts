import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1ServicesAllocationsIdRoute,
  deleteSetupV1ServicesBlockIdRoute,
  deleteSetupV1ServicesCalendarIdRoute,
  deleteSetupV1ServicesIdDeleteimageRoute,
  deleteSetupV1ServicesIdRoute,
  getSetupV1ServicesAllocationsIdRoute,
  getSetupV1ServicesBlocksIdRoute,
  getSetupV1ServicesIdAllocationsRoute,
  getSetupV1ServicesIdAvailabilityRoute,
  getSetupV1ServicesIdBlocksRoute,
  getSetupV1ServicesIdCalendarRoute,
  getSetupV1ServicesIdResourcesRoute,
  getSetupV1ServicesIdRoute,
  getSetupV1ServicesRoute,
  postSetupV1ServicesCalendarRoute,
  postSetupV1ServicesIdAllocationsBulkRoute,
  postSetupV1ServicesIdAllocationsRoute,
  postSetupV1ServicesIdBlockRoute,
  postSetupV1ServicesIdUploadimageRoute,
  postSetupV1ServicesRoute,
  putSetupV1ServicesAllocationsIdRoute,
  putSetupV1ServicesBlockIdRoute,
  putSetupV1ServicesIdAvailabilityRoute,
  putSetupV1ServicesIdRecoverRoute,
  putSetupV1ServicesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicesHandler = app
  .openapi(getSetupV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesCalendarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdAllocationsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1ServicesIdDeleteimageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1ServicesIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1ServicesIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1ServicesIdUploadimageRoute, (c) => {
    throw new Error('Not implemented')
  })

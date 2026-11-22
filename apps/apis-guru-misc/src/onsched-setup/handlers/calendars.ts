import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1CalendarsBlockIdRoute,
  deleteSetupV1CalendarsIdRoute,
  getSetupV1CalendarsBlocksIdRoute,
  getSetupV1CalendarsIdBlocksRoute,
  getSetupV1CalendarsIdRoute,
  getSetupV1CalendarsIdServicesRoute,
  getSetupV1CalendarsRoute,
  postSetupV1CalendarsIdBlockRoute,
  postSetupV1CalendarsRoute,
  putSetupV1CalendarsBlockIdRoute,
  putSetupV1CalendarsIdRecoverRoute,
  putSetupV1CalendarsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const calendarsHandler = app
  .openapi(getSetupV1CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CalendarsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsBlocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CalendarsIdBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CalendarsIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CalendarsIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })

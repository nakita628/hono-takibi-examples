import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAmendmentCongressAmendmentTypeAmendmentNumberActionsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberRoute,
  getAmendmentCongressAmendmentTypeAmendmentNumberTextRoute,
  getAmendmentCongressAmendmentTypeRoute,
  getAmendmentCongressRoute,
  getAmendmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const amendmentsHandler = app
  .openapi(getAmendmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeAmendmentNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeAmendmentNumberActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeAmendmentNumberCosponsorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeAmendmentNumberAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAmendmentCongressAmendmentTypeAmendmentNumberTextRoute, (c) => {
    throw new Error('Not implemented')
  })

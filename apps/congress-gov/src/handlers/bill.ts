import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillCongressBillTypeBillNumberActionsRoute,
  getBillCongressBillTypeBillNumberAmendmentsRoute,
  getBillCongressBillTypeBillNumberCommitteesRoute,
  getBillCongressBillTypeBillNumberCosponsorsRoute,
  getBillCongressBillTypeBillNumberRelatedbillsRoute,
  getBillCongressBillTypeBillNumberRoute,
  getBillCongressBillTypeBillNumberSubjectsRoute,
  getBillCongressBillTypeBillNumberSummariesRoute,
  getBillCongressBillTypeBillNumberTextRoute,
  getBillCongressBillTypeBillNumberTitlesRoute,
  getBillCongressBillTypeRoute,
  getBillCongressRoute,
  getBillRoute,
  getLawCongressLawTypeLawNumberRoute,
  getLawCongressLawTypeRoute,
  getLawCongressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billHandler = app
  .openapi(getBillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberAmendmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberCosponsorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberRelatedbillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberSummariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillCongressBillTypeBillNumberTitlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawCongressLawTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawCongressLawTypeLawNumberRoute, (c) => {
    throw new Error('Not implemented')
  })

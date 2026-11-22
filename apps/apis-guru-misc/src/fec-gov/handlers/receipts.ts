import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchedulesScheduleAByEmployerIndexRoute,
  getSchedulesScheduleAByOccupationIndexRoute,
  getSchedulesScheduleABySizeByCandidateIndexRoute,
  getSchedulesScheduleABySizeIndexRoute,
  getSchedulesScheduleAByStateByCandidateIndexRoute,
  getSchedulesScheduleAByStateByCandidateTotalsIndexRoute,
  getSchedulesScheduleAByStateIndexRoute,
  getSchedulesScheduleAByStateTotalsIndexRoute,
  getSchedulesScheduleAByZipIndexRoute,
  getSchedulesScheduleAEfileIndexRoute,
  getSchedulesScheduleAIndexRoute,
  getSchedulesScheduleASubIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receiptsHandler = app
  .openapi(getSchedulesScheduleAIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByEmployerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByOccupationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleABySizeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleABySizeByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByStateByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByStateByCandidateTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByStateTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAByZipIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleAEfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleASubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

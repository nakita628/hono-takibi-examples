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
  getSchedulesScheduleBByPurposeIndexRoute,
  getSchedulesScheduleBByRecipientIdIndexRoute,
  getSchedulesScheduleBByRecipientIndexRoute,
  getSchedulesScheduleBEfileIndexRoute,
  getSchedulesScheduleBIndexRoute,
  getSchedulesScheduleBSubIdIndexRoute,
  getSchedulesScheduleCIndexRoute,
  getSchedulesScheduleCSubIdIndexRoute,
  getSchedulesScheduleDIndexRoute,
  getSchedulesScheduleDSubIdIndexRoute,
  getSchedulesScheduleEByCandidateIndexRoute,
  getSchedulesScheduleEEfileIndexRoute,
  getSchedulesScheduleEIndexRoute,
  getSchedulesScheduleETotalsByCandidateIndexRoute,
  getSchedulesScheduleFIndexRoute,
  getSchedulesScheduleFSubIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const schedulesHandler = app
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
  .openapi(getSchedulesScheduleBIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByPurposeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByRecipientIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByRecipientIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBEfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleCIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleCSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleDIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleDSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleEIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleEByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleEEfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleETotalsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleFIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleFSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

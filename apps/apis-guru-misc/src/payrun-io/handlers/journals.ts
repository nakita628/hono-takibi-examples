import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  deleteJournalInstructionJournalInstructionIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRoute,
  getEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  getEmployerEmployerIdJournalInstructionsRoute,
  getEmployerEmployerIdJournalLineJournalLineIdRoute,
  getEmployerEmployerIdJournalLinesRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRoute,
  getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRoute,
  getJournalInstructionJournalInstructionIdRoute,
  getJournalInstructionsRoute,
  postEmployerEmployerIdJournalInstructionsRoute,
  postJournalInstructionsRoute,
  putEmployerEmployerIdJournalInstructionJournalInstructionIdRoute,
  putJournalInstructionJournalInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalsHandler = app
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdJournalLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJournalInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })

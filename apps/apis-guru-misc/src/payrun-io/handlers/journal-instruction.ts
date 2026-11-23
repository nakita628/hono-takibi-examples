import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteJournalInstructionJournalInstructionIdRoute,
  getJournalInstructionJournalInstructionIdRoute,
  putJournalInstructionJournalInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalInstructionHandler = app
  .openapi(deleteJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putJournalInstructionJournalInstructionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

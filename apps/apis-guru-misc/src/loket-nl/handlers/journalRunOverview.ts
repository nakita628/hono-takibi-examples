import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverviewperemploymentRoute,
  getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverviewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalRunOverviewHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsJournalrunsJournalrunIdRunoverviewperemploymentRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

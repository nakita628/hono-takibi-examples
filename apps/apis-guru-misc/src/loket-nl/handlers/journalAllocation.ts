import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocationsRoute,
  getProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocationsRoute,
  putProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const journalAllocationHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsJournalallocationsJournalAllocationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdJournalallocationsRoute, (c) => {
    throw new Error('Not implemented')
  })

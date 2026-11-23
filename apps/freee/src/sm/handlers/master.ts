import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMasterBusinessPhasesRoute,
  getMasterCustomFieldsBusinessDefinitionsRoute,
  getMasterDealLineTypesRoute,
  getMasterEmployeesRoute,
  getMasterItemsRoute,
  getMasterMembersRoute,
  getMasterSalesProgressionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const masterHandler = app
  .openapi(getMasterBusinessPhasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterSalesProgressionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterDealLineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterEmployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMasterCustomFieldsBusinessDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })

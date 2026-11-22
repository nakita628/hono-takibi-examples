import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRoute,
  getCompaniesCompanyIdDataItemsItemIdRoute,
  getCompaniesCompanyIdDataItemsRoute,
  postCompaniesCompanyIdConnectionsConnectionIdPushItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const itemsHandler = app
  .openapi(getCompaniesCompanyIdConnectionsConnectionIdOptionsItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdConnectionsConnectionIdPushItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdDataItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })

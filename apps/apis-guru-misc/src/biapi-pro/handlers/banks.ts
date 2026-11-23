import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBanksCategoriesIdCategoryRoute,
  getBanksIdBankRoute,
  getBanksIdConnectorConnectionsRoute,
  getBanksIdConnectorLogosMainRoute,
  getBanksIdConnectorLogosRoute,
  getBanksIdConnectorLogosThumbnailRoute,
  getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute,
  getBanksIdConnectorSourcesIdSourceRoute,
  getBanksIdConnectorSourcesRoute,
  getBanksRoute,
  postBanksCategoriesIdCategoryRoute,
  postBanksCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const banksHandler = app
  .openapi(getBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBanksCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBanksCategoriesIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBanksCategoriesIdCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdBankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorLogosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesIdConnectorSourceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBanksIdConnectorSourcesIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePortfoliosPortfolioGidRoute,
  getPortfoliosPortfolioGidItemsRoute,
  getPortfoliosPortfolioGidRoute,
  getPortfoliosRoute,
  postPortfoliosPortfolioGidAddCustomFieldSettingRoute,
  postPortfoliosPortfolioGidAddItemRoute,
  postPortfoliosPortfolioGidAddMembersRoute,
  postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute,
  postPortfoliosPortfolioGidRemoveItemRoute,
  postPortfoliosPortfolioGidRemoveMembersRoute,
  postPortfoliosRoute,
  putPortfoliosPortfolioGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfoliosHandler = app
  .openapi(getPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePortfoliosPortfolioGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfoliosPortfolioGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPortfoliosPortfolioGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidAddCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidAddItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPortfoliosPortfolioGidItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidRemoveCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidRemoveItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfoliosPortfolioGidRemoveMembersRoute, (c) => {
    throw new Error('Not implemented')
  })

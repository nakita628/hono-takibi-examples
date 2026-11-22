import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountingCategoriesAccountingCategoryIdRoute,
  deleteLabelGroupsGroupIdLabelsLabelIdRoute,
  deleteLabelGroupsGroupIdRoute,
  deleteTaxRatesTaxRateIdRoute,
  getAccountingCategoriesAccountingCategoryIdRoute,
  getAccountingCategoriesRoute,
  getLabelGroupsGroupIdLabelsRoute,
  getLabelGroupsGroupIdRoute,
  getLabelGroupsRoute,
  getTaxRatesRoute,
  getTaxRatesTaxRateIdRoute,
  patchAccountingCategoriesAccountingCategoryIdRoute,
  patchLabelGroupsGroupIdLabelsLabelIdRoute,
  patchLabelGroupsGroupIdRoute,
  patchTaxRatesTaxRateIdRoute,
  postAccountingCategoriesRoute,
  postLabelGroupsGroupIdLabelsRoute,
  postLabelGroupsRoute,
  postTaxRatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountingHandler = app
  .openapi(postAccountingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountingCategoriesAccountingCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLabelGroupsGroupIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelGroupsGroupIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLabelGroupsGroupIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelGroupsGroupIdLabelsLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTaxRatesTaxRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })

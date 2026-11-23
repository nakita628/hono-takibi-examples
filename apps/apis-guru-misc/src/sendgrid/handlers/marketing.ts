import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingContactsRoute,
  deleteMarketingFieldDefinitionsCustomFieldIdRoute,
  deleteMarketingListsIdContactsRoute,
  deleteMarketingListsIdRoute,
  deleteMarketingSegments20SegmentIdRoute,
  deleteMarketingSegmentsSegmentIdRoute,
  deleteMarketingSinglesendsIdRoute,
  deleteMarketingSinglesendsIdScheduleRoute,
  deleteMarketingSinglesendsRoute,
  getMarketingContactsCountRoute,
  getMarketingContactsExportsIdRoute,
  getMarketingContactsExportsRoute,
  getMarketingContactsIdRoute,
  getMarketingContactsImportsIdRoute,
  getMarketingContactsRoute,
  getMarketingFieldDefinitionsRoute,
  getMarketingListsIdContactsCountRoute,
  getMarketingListsIdRoute,
  getMarketingListsRoute,
  getMarketingSegments20Route,
  getMarketingSegments20SegmentIdRoute,
  getMarketingSegmentsRoute,
  getMarketingSegmentsSegmentIdRoute,
  getMarketingSinglesendsCategoriesRoute,
  getMarketingSinglesendsIdRoute,
  getMarketingSinglesendsRoute,
  getMarketingStatsAutomationsExportRoute,
  getMarketingStatsAutomationsIdLinksRoute,
  getMarketingStatsAutomationsIdRoute,
  getMarketingStatsAutomationsRoute,
  getMarketingStatsSinglesendsExportRoute,
  getMarketingStatsSinglesendsIdLinksRoute,
  getMarketingStatsSinglesendsIdRoute,
  getMarketingStatsSinglesendsRoute,
  patchMarketingFieldDefinitionsCustomFieldIdRoute,
  patchMarketingListsIdRoute,
  patchMarketingSegments20SegmentIdRoute,
  patchMarketingSegmentsSegmentIdRoute,
  patchMarketingSinglesendsIdRoute,
  postMarketingContactsBatchRoute,
  postMarketingContactsExportsRoute,
  postMarketingContactsSearchEmailsRoute,
  postMarketingContactsSearchRoute,
  postMarketingFieldDefinitionsRoute,
  postMarketingListsRoute,
  postMarketingSegments20Route,
  postMarketingSegmentsDeleteRoute,
  postMarketingSegmentsRoute,
  postMarketingSendersRoute,
  postMarketingSinglesendsIdRoute,
  postMarketingSinglesendsRoute,
  postMarketingSinglesendsSearchRoute,
  postMarketingTestSendEmailRoute,
  putMarketingContactsImportsRoute,
  putMarketingContactsRoute,
  putMarketingSinglesendsIdScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketingHandler = app
  .openapi(deleteMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsExportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingContactsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsImportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingContactsSearchEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingContactsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingFieldDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingFieldDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingFieldDefinitionsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingFieldDefinitionsCustomFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingListsIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingListsIdContactsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegments20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegments20Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSegments20SegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSegmentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSegmentsSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingSinglesendsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMarketingSinglesendsIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsAutomationsIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingStatsSinglesendsIdLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingTestSendEmailRoute, (c) => {
    throw new Error('Not implemented')
  })

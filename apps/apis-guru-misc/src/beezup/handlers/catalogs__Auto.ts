import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCatalogsStoreIdAutoImportRoute,
  getV2UserCatalogsStoreIdAutoImportRoute,
  postV2UserCatalogsStoreIdAutoImportActivateRoute,
  postV2UserCatalogsStoreIdAutoImportPauseRoute,
  postV2UserCatalogsStoreIdAutoImportResumeRoute,
  postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute,
  postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute,
  postV2UserCatalogsStoreIdAutoImportStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogs__AutoHandler = app
  .openapi(deleteV2UserCatalogsStoreIdAutoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdAutoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportStartRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  headV2DatasetsDatasetIdItemsRoute,
  headV2KeyValueStoresStoreIdRecordsRecordKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(headV2KeyValueStoresStoreIdRecordsRecordKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2DatasetsDatasetIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
  getDatasetsDatasetIdChangesetsv2Route,
  getDatasetsDatasetIdDataviewsv2DataviewIdRoute,
  getDatasetsDatasetIdDataviewsv2Route,
  postDatasetsDatasetIdChangesetsv2Route,
  postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRoute,
  postDatasetsDatasetIdDataviewsv2Route,
  putDatasetsDatasetIdChangesetsv2ChangesetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datasetsHandler = app
  .openapi(postDatasetsDatasetIdChangesetsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetIdChangesetsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsDatasetIdDataviewsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetIdDataviewsv2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetIdChangesetsv2ChangesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDatasetsDatasetIdChangesetsv2ChangesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsDatasetIdDataviewsv2DataviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDatasetsDatasetIdDataviewsv2DataviewIdExternalAccessDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIngesterV1IngesterServiceBlockMetadataRoute,
  postIngesterV1IngesterServiceFlushRoute,
  postIngesterV1IngesterServiceGetBlockStatsRoute,
  postIngesterV1IngesterServiceGetProfileStatsRoute,
  postIngesterV1IngesterServiceLabelNamesRoute,
  postIngesterV1IngesterServiceLabelValuesRoute,
  postIngesterV1IngesterServiceProfileTypesRoute,
  postIngesterV1IngesterServicePushRoute,
  postIngesterV1IngesterServiceSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ingesterV1IngesterServiceHandler = app
  .openapi(postIngesterV1IngesterServiceBlockMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceGetBlockStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceGetProfileStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceLabelNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceLabelValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceProfileTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServicePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIngesterV1IngesterServiceSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })

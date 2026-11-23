import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLabelsV4ResourceTypeResourceIdKeyRoute,
  deleteLabelsV4ResourceTypeResourceIdKeyValueRoute,
  deleteLabelsV4ResourceTypeResourceIdRoute,
  getLabelsV4HealthRoute,
  getLabelsV4ResourceTypeKeysKeyValuesRoute,
  getLabelsV4ResourceTypeKeysRoute,
  getLabelsV4ResourceTypeResourceIdRoute,
  getLabelsV4ResourceTypeRoute,
  getLabelsV4VersionRoute,
  putLabelsV4ResourceTypeResourceIdBatchRoute,
  putLabelsV4ResourceTypeResourceIdKeyValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const labelsHandler = app
  .openapi(getLabelsV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsV4ResourceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsV4ResourceTypeKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsV4ResourceTypeKeysKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsV4ResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsV4ResourceTypeResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsV4ResourceTypeResourceIdBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsV4ResourceTypeResourceIdKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLabelsV4ResourceTypeResourceIdKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLabelsV4ResourceTypeResourceIdKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAssetsSeedStatusRoute,
  getApiDeploySummaryRoute,
  getApiEmbeddingsRoute,
  getApiI18nRoute,
  postApiAssetsPruneRoute,
  postApiAssetsSeedCancelRoute,
  postApiAssetsSeedRoute,
  postApiDeployBundleRoute,
  postApiFreeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiAssetsPruneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsSeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAssetsSeedCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAssetsSeedStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeployBundleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeploySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiEmbeddingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiFreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiI18nRoute, (c) => {
    throw new Error('Not implemented')
  })

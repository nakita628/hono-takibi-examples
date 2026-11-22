import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLtrFeatureIdRoute,
  deleteLtrFeaturesetIdRoute,
  deleteLtrModelIdRoute,
  deleteLtrRoute,
  deleteLtrStoreFeatureIdRoute,
  deleteLtrStoreFeaturesetIdRoute,
  deleteLtrStoreModelIdRoute,
  deleteLtrStoreRoute,
  getLtrCachestatsRoute,
  getLtrFeatureIdRoute,
  getLtrFeatureRoute,
  getLtrFeaturesetIdRoute,
  getLtrFeaturesetRoute,
  getLtrModelIdRoute,
  getLtrModelRoute,
  getLtrRoute,
  getLtrStoreFeatureIdRoute,
  getLtrStoreFeatureRoute,
  getLtrStoreFeaturesetIdRoute,
  getLtrStoreFeaturesetRoute,
  getLtrStoreModelIdRoute,
  getLtrStoreModelRoute,
  getLtrStoreRoute,
  postLtrClearcacheRoute,
  postLtrFeatureIdRoute,
  postLtrFeaturesetIdRoute,
  postLtrFeaturesetNameAddfeaturesQueryRoute,
  postLtrFeaturesetNameAddfeaturesRoute,
  postLtrFeaturesetNameCreatemodelRoute,
  postLtrStoreClearcacheRoute,
  postLtrStoreFeatureIdRoute,
  postLtrStoreFeaturesetIdRoute,
  postLtrStoreFeaturesetNameAddfeaturesQueryRoute,
  postLtrStoreFeaturesetNameAddfeaturesRoute,
  postLtrStoreFeaturesetNameCreatemodelRoute,
  putLtrFeatureIdRoute,
  putLtrFeaturesetIdRoute,
  putLtrModelIdRoute,
  putLtrRoute,
  putLtrStoreFeatureIdRoute,
  putLtrStoreFeaturesetIdRoute,
  putLtrStoreModelIdRoute,
  putLtrStoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ltrHandler = app
  .openapi(deleteLtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrCachestatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrClearcacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrFeaturesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrFeaturesetNameAddfeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrFeaturesetNameAddfeaturesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrFeaturesetNameCreatemodelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreClearcacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreFeatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrStoreFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrStoreFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreFeaturesetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrStoreFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrStoreFeaturesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreFeaturesetNameAddfeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreFeaturesetNameAddfeaturesQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLtrStoreFeaturesetNameCreatemodelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLtrStoreModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLtrStoreModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLtrStoreModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })

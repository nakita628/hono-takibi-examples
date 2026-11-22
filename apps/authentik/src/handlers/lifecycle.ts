import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLifecycleRulesIdIndexRoute,
  deleteLifecycleUserExpirationRulesIdIndexRoute,
  deleteLifecycleUserOffboardingIdIndexRoute,
  getLifecycleIterationsLatestContentTypeObjectIdIndexRoute,
  getLifecycleIterationsOpenIndexRoute,
  getLifecycleRulesIdIndexRoute,
  getLifecycleRulesIndexRoute,
  getLifecycleUserExpirationRulesIdIndexRoute,
  getLifecycleUserExpirationRulesIdPreviewIndexRoute,
  getLifecycleUserExpirationRulesIdUsedByIndexRoute,
  getLifecycleUserExpirationRulesIndexRoute,
  getLifecycleUserOffboardingIdIndexRoute,
  getLifecycleUserOffboardingIndexRoute,
  patchLifecycleRulesIdIndexRoute,
  patchLifecycleUserExpirationRulesIdIndexRoute,
  postLifecycleIterationsIndexRoute,
  postLifecycleReviewsIndexRoute,
  postLifecycleRulesIndexRoute,
  postLifecycleUserExpirationRulesIdPreviewIndexRoute,
  postLifecycleUserExpirationRulesIndexRoute,
  postLifecycleUserOffboardingIndexRoute,
  putLifecycleRulesIdIndexRoute,
  putLifecycleUserExpirationRulesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lifecycleHandler = app
  .openapi(postLifecycleIterationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleIterationsLatestContentTypeObjectIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleIterationsOpenIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleReviewsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLifecycleRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLifecycleRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLifecycleRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserExpirationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleUserExpirationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserExpirationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLifecycleUserExpirationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLifecycleUserExpirationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLifecycleUserExpirationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserExpirationRulesIdPreviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleUserExpirationRulesIdPreviewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserExpirationRulesIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserOffboardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLifecycleUserOffboardingIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLifecycleUserOffboardingIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLifecycleUserOffboardingIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
